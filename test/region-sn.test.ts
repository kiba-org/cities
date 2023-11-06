import { test, expect } from "vitest";
import { regions } from "../src/region-sn.js";

test("Les régions sont correctement associées aux villes", () => {
  expect(regions).toBeDefined();

  regions.forEach((region) => {
    expect(region.name).toBeDefined();
    expect(region.departments).toBeDefined();
    expect(Array.isArray(region.departments)).toBe(true);

    if (region.cities) {
      region.cities.forEach((city) => {
        expect(city.name).toBeDefined();
        expect(city.loc).toBeDefined();
        expect(city.loc.type).toBe("point");
        expect(city.loc.coordinates).toBeDefined();
        expect(city.loc.coordinates.length).toBe(2);
        expect(typeof city.loc.coordinates[0]).toBe("number");
        expect(typeof city.loc.coordinates[1]).toBe("number");
        expect(city.population).toBeDefined();
        expect(city.countryCode).toBeDefined();
        expect(city.updatedAt).toBeDefined();
      });
    }
  });
});
