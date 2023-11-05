const fs = require("fs");
const path = require("path");

const sourceDirectory = path.join(__dirname, "src"); // Répertoire source
const targetDirectory = path.join(__dirname, "dist"); // Répertoire cible

// Lister tous les fichiers avec l'extension .txt dans le répertoire source
fs.readdirSync(sourceDirectory).forEach((file) => {
  if (file.endsWith(".gz") || file === "regions.txt") {
    const sourceFile = path.join(sourceDirectory, file);
    const targetFile = path.join(targetDirectory, file);
    fs.copyFileSync(sourceFile, targetFile);
  }
});

console.log(
  'Fichiers .txt copiés avec succès depuis le répertoire "src" vers le répertoire "dist".'
);
