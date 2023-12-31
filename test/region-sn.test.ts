import { test, expect } from "vitest";
import { regions } from "../src/region-sn.js";

test("Les régions sont correctement associées aux villes", () => {
  expect(regions).toBeDefined();

  regions.forEach((region) => {
    expect(region.name).toBeDefined();
    expect(region.departments).toBeDefined();
    expect(Array.isArray(region.departments)).toBe(true);

    if (region.cities) {
      for (const city of region.cities) {
        expect(city.loc).toBeDefined();
        expect(city.loc.type).toBe("point");
        expect(city.loc.coordinates).toBeDefined();
        expect(city.loc.coordinates).toBeDefined();
        expect(typeof city.loc.coordinates.lat).toBe("number");
        expect(typeof city.loc.coordinates.lat).toBe("number");
        expect(city.population).toBeDefined();
        expect(city.countryCode).toBeDefined();
        expect(city.updatedAt).toBeDefined();
      }
    }
  });
});
