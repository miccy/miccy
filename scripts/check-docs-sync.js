const fs = require("fs");
const path = require("path");

const docsDir = path.join(__dirname, "../docs");
const enPath = path.join(docsDir, "en");
const csPath = path.join(docsDir, "cs");

const enFiles = fs.readdirSync(enPath);
const csFiles = fs.readdirSync(csPath);

if (enFiles.length !== csFiles.length) {
  console.error("Počet souborů v en a cs se liší!");
  process.exit(1);
}

const MIN_LENGTH = 50;

// Funkce pro kontrolu minimální délky obsahu.
function checkContentLength(content, fileName, lang) {
  if (content.length < MIN_LENGTH) {
    console.error(`Soubor ${fileName} v ${lang} je příliš krátký.`);
    process.exit(1);
  }
}

// Funkce pro kontrolu, zda soubor obsahuje titulek (první neprázdný řádek začínající "#")
function checkTitle(content, fileName, lang) {
  const lines = content.split(/\r?\n/);
  const firstNonEmptyLine = lines.find(line => line.trim() !== "");
  if (!firstNonEmptyLine || !firstNonEmptyLine.trim().startsWith("#")) {
    console.error(
      `Soubor ${fileName} v ${lang} neobsahuje titulek (řádek začínající '#')!`
    );
    process.exit(1);
  }
}

// Kontrola českých dokumentů
csFiles.forEach(file => {
  const filePath = path.join(csPath, file);
  const content = fs.readFileSync(filePath, "utf8");
  checkContentLength(content, file, "cs");
  checkTitle(content, file, "cs");
  if (!content.includes("<!-- TRANSLATED -->")) {
    console.error(`Soubor ${file} není označen jako přeložený!`);
    process.exit(1);
  }
});

// Kontrola anglických dokumentů
enFiles.forEach(file => {
  const filePath = path.join(enPath, file);
  const content = fs.readFileSync(filePath, "utf8");
  checkContentLength(content, file, "en");
  checkTitle(content, file, "en");
});

console.log("Dokumentace je synchronizována a validována.");
