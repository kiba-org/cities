import { test, expect } from "vitest";
import { allCountries } from "../src/cities.js";

test("Le tableau de villes est défini", () => {
  expect(allCountries).toBeDefined();
});

test("Le tableau de villes ne doit pas être vide", () => {
  expect(allCountries.length).toBeGreaterThan(0);
});

test("Les villes ont les propriétés requises", () => {
  for (const city of allCountries) {
    expect(city.name).toBeDefined();
    expect(city.loc).toBeDefined();
    expect(city.loc.type).toBe("Point");
    expect(city.loc.coordinates).toBeDefined();
    expect(city.loc.coordinates).toBeDefined();
    expect(typeof city.loc.coordinates.lat).toBe("number");
    expect(typeof city.loc.coordinates.lat).toBe("number");
    expect(city.population).toBeDefined();
    expect(city.countryCode).toBeDefined();
    expect(city.updatedAt).toBeDefined();
  }
});
