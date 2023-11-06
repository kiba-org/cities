import { test, expect } from "vitest";
import { getListofDepartmentSN } from "../src/data-utils.js";

test("Liste des department sn ", () => {
  const result = getListofDepartmentSN();

  for (const city of result) {
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
  }
});
