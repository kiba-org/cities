import { test, expect } from "vitest";
import { snData } from "../src/sn.js";

test("Le tableau de villes est défini", () => {
  expect(snData).toBeDefined();
});

test("Le tableau de villes ne doit pas être vide", () => {
  expect(snData.length).toBeGreaterThan(0);
});

test("Les villes ont les propriétés requises", () => {
  snData.forEach((city) => {
    expect(city.name).toBeDefined();
    expect(city.loc).toBeDefined();
    expect(city.loc.type).toBe("Point");
    expect(city.loc.coordinates).toBeDefined();
    expect(city.loc.coordinates.length).toBe(2);
    expect(typeof city.loc.coordinates[0]).toBe("number");
    expect(typeof city.loc.coordinates[1]).toBe("number");
    expect(city.population).toBeDefined();
    expect(city.countryCode).toBeDefined();
    expect(city.updatedAt).toBeDefined();
  });
});
