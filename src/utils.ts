export interface City {
  name: string;
  asciiname: string; // name of geographical point in plain ascii characters, varchar(200)
  loc: {
    type: string;
    coordinates: [number, number];
  };
  population: number;
  countryCode: string;
  cc2: string; //  alternate country codes, comma separated, ISO-3166 2-letter country code, 200 characters
  updatedAt: string;
}

export function processCityData(lines: string[]): City[] {
  const cities: City[] = [];

  lines.forEach((line: string) => {
    const columns: string[] = line.split("\t");

    if (columns.length) {
      const name: string = columns[1];
      const asciiname: string = columns[2];
      const population: number = parseInt(columns[14]); // Colonne contenant la population
      const latitude: number = parseFloat(columns[4]);
      const longitude: number = parseFloat(columns[5]);
      const date: string = columns[18]; // Colonne contenant la date
      const countryCode = columns[8];
      const cc2 = columns[9];

      if (!isNaN(latitude) && !isNaN(longitude) && !isNaN(population)) {
        cities.push({
          name: name,
          asciiname,
          loc: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          population,
          countryCode,
          cc2,
          updatedAt: date,
        });
      }
    }
  });

  return cities;
}
