const fs = require("fs");
const path = require("path");
const { Translate } = require("@google-cloud/translate").v2;

// Konfigurace překladače
const translate = new Translate({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
});

const DOCS_DIR = path.join(__dirname, "..", "docs");
const SOURCE_LANG = "cs";
const TARGET_LANGS = ["en"];

async function translateText(text, targetLang) {
  try {
    const [translation] = await translate.translate(text, {
      from: SOURCE_LANG,
      to: targetLang
    });
    return translation;
  } catch (error) {
    console.error(`Error translating text: ${error}`);
    return text;
  }
}

async function translateMarkdown(content, targetLang) {
  // Rozdělíme obsah na části, které se mají/nemají překládat
  const parts = content.split(/(\`\`\`[\s\S]*?\`\`\`|\[.*?\]\(.*?\))/g);

  const translatedParts = await Promise.all(
    parts.map(async part => {
      // Nepřekládáme kódové bloky a odkazy
      if (part.startsWith("```") || /^\[.*?\]\(.*?\)$/.test(part)) {
        return part;
      }
      return await translateText(part, targetLang);
    })
  );

  return translatedParts.join("");
}

async function processFile(sourcePath, targetPath, targetLang) {
  const content = fs.readFileSync(sourcePath, "utf8");
  const translatedContent = await translateMarkdown(content, targetLang);

  // Vytvoříme cílovou složku, pokud neexistuje
  const targetDir = path.dirname(targetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetPath, translatedContent);
  console.log(
    `✅ Translated ${path.relative(DOCS_DIR, sourcePath)} to ${targetLang}`
  );
}

async function translateDocs() {
  try {
    const sourceFiles = [];
    const processDir = dir => {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          processDir(fullPath);
        } else if (path.extname(fullPath) === ".md") {
          sourceFiles.push(fullPath);
        }
      });
    };

    processDir(path.join(DOCS_DIR, SOURCE_LANG));

    for (const targetLang of TARGET_LANGS) {
      for (const sourceFile of sourceFiles) {
        const relativePath = path.relative(
          path.join(DOCS_DIR, SOURCE_LANG),
          sourceFile
        );
        const targetPath = path.join(DOCS_DIR, targetLang, relativePath);
        await processFile(sourceFile, targetPath, targetLang);
      }
    }

    console.log("✅ Translation completed successfully");
  } catch (error) {
    console.error("❌ Translation failed:", error);
    process.exit(1);
  }
}

translateDocs();
