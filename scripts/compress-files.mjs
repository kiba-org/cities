import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip, constants } from "zlib";

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);

const data = [
  {
    allow: true,
    name: "sn",
    inputPath: "../data/SN.txt",
    outputPath: "../dist/SN.txt.gz",
  },
  {
    allow: true,
    name: "ml",
    inputPath: "../data/ML.txt",
    outputPath: "../dist/ML.txt.gz",
  },
  {
    allow: true,
    name: "regions",
    inputPath: "../data/regions.txt",
    outputPath: "../dist/regions.txt.gz",
  },
  {
    allow: true,
    name: "cities",
    inputPath: "../data/cities500.txt",
    outputPath: "../dist/cities500.txt.gz",
  },
];
/**
 * Compress files
 */

data.map((file) => {
  if (!file.allow) return;
  const inputFilePath = path.join(currentDir, file.inputPath);
  const outputFilePath = path.join(currentDir, file.outputPath);
  const input = createReadStream(inputFilePath);
  const output = createWriteStream(outputFilePath);
  const gzip = createGzip({
    level: constants.Z_MAX_LEVEL,
  });
  input.pipe(gzip).pipe(output);

  output.on("finish", () => {
    console.log(`Compression du fichier ${file.name} terminée.`);
  });
});
