import * as fs from "fs";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip, constants } from "zlib";

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);

/**
 * Compress files
 */

// TODO: add for all country > 500
//const inputCitiesFilePath = path.join(currentDir, "../data/cities500.txt");
//const outputCitiesFilePath = path.join(currentDir, "../data/cities500.txt.gz");

const inputSNFilePath = path.join(currentDir, "../data/SN.txt");
const outputSNFilePath = path.join(currentDir, "../data/SN.txt.gz");

const inputMLFilePath = path.join(currentDir, "../data/ML.txt");
const outputMLFilePath = path.join(currentDir, "../data/ML.txt.gz");
// TODO: add for all country > 500
//const inputCities = createReadStream(inputCitiesFilePath);
//const outputCities = createWriteStream(outputCitiesFilePath);

const inputSN = createReadStream(inputSNFilePath);
const outputSN = createWriteStream(outputSNFilePath);

const inputML = createReadStream(inputMLFilePath);
const outputML = createWriteStream(outputMLFilePath);

// TODO: add for all country > 500
// const gzipCities = createGzip({
//   level: constants.Z_MAX_LEVEL,
// });
const gzipSN = createGzip({
  level: constants.Z_MAX_LEVEL,
});
const gzipML = createGzip({
  level: constants.Z_MAX_LEVEL,
});

// TODO: add for all country > 500
//inputCities.pipe(gzipCities).pipe(outputCities);
inputSN.pipe(gzipSN).pipe(outputSN);
inputML.pipe(gzipML).pipe(outputML);

// TODO: add for all country > 500
// outputCities.on("finish", () => {
//   console.log("Compression du fichier Cities500 terminée.");
// });
// TODO: add for all country > 500
// outputCities.on("error", (err) => {
//   console.error("Erreur lors de la compression du fichier Cities500 :", err);
// });

outputSN.on("finish", () => {
  console.log("Compression du fichier SN terminée.");
});

outputSN.on("error", (err) => {
  console.error("Erreur lors de la compression du fichier SN :", err);
});

outputML.on("finish", () => {
  console.log("Compression du fichier ML terminée.");
});

outputML.on("error", (err) => {
  console.error("Erreur lors de la compression du fichier ML :", err);
});

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
