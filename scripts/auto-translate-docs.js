const fs = require("fs").promises;
const path = require("path");

// Dynamické načtení modulu "translate"
async function getTranslate() {
  const module = await import("translate");
  return module.default;
}

(async () => {
  try {
    const translate = await getTranslate();

    // Nastavení překladu
    translate.engine = "libre";
    translate.from = "en";
    translate.to = "cs";

    // Funkce pro překlad souboru
    async function translateFile(enFilePath, csFilePath) {
      try {
        const content = await fs.readFile(enFilePath, "utf8");
        const translated = await translate(content);
        if (!translated || translated.length < 50) {
          throw new Error(`Překlad nefungoval pro ${enFilePath}`);
        }
        const finalContent = translated.includes("<!-- TRANSLATED -->")
          ? translated
          : translated + "\n\n<!-- TRANSLATED -->\n";
        await fs.writeFile(csFilePath, finalContent, "utf8");
        console.log(`Přeložený soubor uložen: ${csFilePath}`);
      } catch (err) {
        console.error("Chyba při překladu:", err);
        process.exit(1);
      }
    }

    // Hlavní funkce pro překlad dokumentů
    async function translateDocs() {
      try {
        const docsDir = path.join(__dirname, "../docs");
        const enDir = path.join(docsDir, "en");
        const csDir = path.join(docsDir, "cs");

        try {
          await fs.access(csDir);
        } catch {
          await fs.mkdir(csDir, { recursive: true });
        }

        const files = await fs.readdir(enDir);
        for (const file of files) {
          if (file.endsWith(".md")) {
            const enFilePath = path.join(enDir, file);
            const csFilePath = path.join(csDir, file);
            await translateFile(enFilePath, csFilePath);
          }
        }
        console.log("Všechny dokumenty byly přeloženy.");
      } catch (err) {
        console.error("Chyba během překladu dokumentů:", err);
        process.exit(1);
      }
    }

    await translateDocs();
  } catch (err) {
    console.error(
      "Nastala chyba při dynamickém importu modulu translate:",
      err
    );
    process.exit(1);
  }
})();
