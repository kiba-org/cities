import * as fs from "fs";

export interface City {
  name: string;
  loc: {
    type: string;
    coordinates: [number, number];
  };
  population: number;
  countryCode: string;
  date: string;
}

function processCityData(lines: string[], countryCode: string): City[] {
  const cities: City[] = [];

  lines.forEach((line: string) => {
    const columns: string[] = line.split("\t");

    if (columns.length) {
      const name: string = columns[1];
      const population: number = parseInt(columns[14]); // Colonne contenant la population
      const latitude: number = parseFloat(columns[4]);
      const longitude: number = parseFloat(columns[5]);
      const date: string = columns[18]; // Colonne contenant la date

      if (!isNaN(latitude) && !isNaN(longitude) && !isNaN(population)) {
        cities.push({
          name: name,
          loc: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          population: population,
          countryCode: countryCode,
          date: date,
        });
      }
    }
  });

  return cities;
}

const snData: string = fs.readFileSync("dist/SN.txt", "utf8");
const mlData: string = fs.readFileSync("dist/ML.txt", "utf8");

const snLines: string[] = snData.split("\n");
const mlLines: string[] = mlData.split("\n");

const snCities: City[] = processCityData(snLines, "SN"); // Villes du Sénégal
const mlCities: City[] = processCityData(mlLines, "ML"); // Villes du Mali

const citiesSet: Set<string> = new Set(); // Ensemble pour stocker les noms des villes déjà ajoutées
const cities: City[] = [...snCities, ...mlCities].filter((city) => {
  if (!citiesSet.has(city.name)) {
    citiesSet.add(city.name);
    return true;
  }
  return false;
}); // Combinaison des villes des deux pays, en évitant les doublons

export { cities };
