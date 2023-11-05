const fs = require("fs");
const zlib = require("zlib");

const inputSNFilePath = "./src/SN.txt";
const outputSNFilePath = "./src/SN.txt.gz";

const inputMLFilePath = "./src/ML.txt"; // Corrected input file path
const outputMLFilePath = "./src/ML.txt.gz"; // Corrected output file path

const inputSN = fs.createReadStream(inputSNFilePath);
const outputSN = fs.createWriteStream(outputSNFilePath);

const inputML = fs.createReadStream(inputMLFilePath);
const outputML = fs.createWriteStream(outputMLFilePath);

const gzipSN = zlib.createGzip();
const gzipML = zlib.createGzip();

inputSN.pipe(gzipSN).pipe(outputSN);

inputML.pipe(gzipML).pipe(outputML);

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
