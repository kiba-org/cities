import * as fs from "fs";
import path from "path";

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);
/**
 * Copy files data ---> dist
 */
const sourceDirectory = path.join(currentDir, "../data"); // Répertoire source
const targetDirectory = path.join(currentDir, "../dist"); // Répertoire cible

// Lister tous les fichiers avec l'extension .txt dans le répertoire source
fs.readdirSync(sourceDirectory).forEach((file) => {
  if (file.endsWith(".gz") || file === "regions.txt") {
    const sourceFile = path.join(sourceDirectory, file);
    const targetFile = path.join(targetDirectory, file);
    fs.copyFileSync(sourceFile, targetFile);
  }
});

console.log(
  'Fichiers .txt copiés avec succès depuis le répertoire "data" vers le répertoire "dist".'
);
