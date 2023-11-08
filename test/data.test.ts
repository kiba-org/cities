import { test, expect } from "vitest";
import { KibaCities } from "../src/kiba-utils.js";

test("Liste des department sn ", () => {
  const result = KibaCities.sn.getListOfDepartments();

  for (const city of result) {
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
