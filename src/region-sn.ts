import * as fs from "fs";
import path from "path";
import zlib from "zlib";

import { snData } from "./sn.js";
import { City } from "./utils.js";

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);
const rgGzFilePath = path.join(currentDir, "../dist/regions.txt.gz");

const regionsGzData: Buffer = fs.readFileSync(rgGzFilePath);
const regionsData: string = zlib.gunzipSync(regionsGzData).toString("utf8");
const rgLines: string[] = regionsData.split("\n");
interface Region {
  name: string;
  departments: string[];
  cities?: City[];
}

const regionSnCities = (): Region[] => {
  const regions: Region[] = [];
  let currentRegion: Region | null = null;

  for (const line of rgLines) {
    if (line.trim() === "") {
      // Ignorer les lignes vides
      continue;
    }

    if (line.startsWith("- ")) {
      // Ajouter un département à la région actuelle
      if (currentRegion) {
        currentRegion.departments.push(line.trim().substring(2));
      }
    } else {
      // Commencer une nouvelle région
      if (currentRegion) {
        regions.push(currentRegion);
      }
      currentRegion = { name: line.trim(), departments: [] };
    }
  }

  // Ajouter la dernière région
  if (currentRegion) {
    regions.push(currentRegion);
  }

  return regions;
};
const regionSn = regionSnCities();
const regions = regionSn.map((region) => {
  const datacities = snData.find((city) => region.name === city.name);
  return { ...region, ...datacities };
});
export { regions };
