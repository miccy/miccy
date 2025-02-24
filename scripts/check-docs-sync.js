const fs = require("fs");
const path = require("path");

const DOCS_DIR = path.join(__dirname, "..", "docs");
const PRIMARY_LANG = "cs";
const SECONDARY_LANGS = ["en"];

function getFiles(dir) {
  const results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...getFiles(filePath));
    } else {
      results.push(filePath);
    }
  });

  return results;
}

function checkDocsSync() {
  const primaryFiles = getFiles(path.join(DOCS_DIR, PRIMARY_LANG)).map(file =>
    path.relative(path.join(DOCS_DIR, PRIMARY_LANG), file)
  );

  let hasError = false;

  SECONDARY_LANGS.forEach(lang => {
    const langDir = path.join(DOCS_DIR, lang);
    const langFiles = getFiles(langDir).map(file =>
      path.relative(langDir, file)
    );

    // Check for missing files
    primaryFiles.forEach(file => {
      if (!langFiles.includes(file)) {
        console.error(`❌ Missing translation for ${file} in ${lang}`);
        hasError = true;
      }
    });

    // Check for extra files
    langFiles.forEach(file => {
      if (!primaryFiles.includes(file)) {
        console.error(
          `❌ Extra file ${file} in ${lang} not present in ${PRIMARY_LANG}`
        );
        hasError = true;
      }
    });
  });

  if (hasError) {
    process.exit(1);
  } else {
    console.log("✅ All documentation files are in sync");
  }
}

checkDocsSync();
