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
