import * as fs from "fs";
import path from "path";

import { City, cities } from "./cities.js";

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);
const rgFilePath = path.join(currentDir, "../dist/regions.txt");

const regionSn: string = fs.readFileSync(rgFilePath, "utf8");
const regionSnLines: string[] = regionSn.split("\n");

interface Region {
  name: string;
  departments: string[];
  cities?: City[];
}

const regionSnCities = (): Region[] => {
  const regions: Region[] = [];
  let currentRegion: Region | null = null;

  for (const line of regionSnLines) {
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
const getregions = regionSnCities();
const regions = getregions.map((region) => {
  const datacities = cities.find((city) => region.name.includes(city.name));
  return { ...region, ...datacities };
});

export { regions };
