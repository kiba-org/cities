import * as fs from "fs";
import path from "path";
import zlib from "zlib";
import { City, processCityData } from "./utils.js";

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);
const citiesGzFilePath = path.join(currentDir, "../dist/ML.txt.gz");

const citiesGzData: Buffer = fs.readFileSync(citiesGzFilePath);
const citiesData: string = zlib.gunzipSync(citiesGzData).toString("utf8");

const citiesLines: string[] = citiesData.split("\n");

const allCities: City[] = processCityData(citiesLines);

const cities: City[] = allCities.sort((a, b) => a.name.localeCompare(b.name));
const mlData = cities;

export { mlData };
