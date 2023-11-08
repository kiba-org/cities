import { snData } from "./sn.js";
import { mlData } from "./ml.js";
import { regions } from "./region-sn.js";
import { type City } from "./utils.js";
import { allCountries } from "./cities.js";

type Regions = (typeof regions)[number];
// A class to handle kiba cities.
/**
 * KIBA-ORG CITIES 💫
 */
export class KibaCities {
  /**
   * Grabs a list of all country .
   *
   * @returns {Array<City>} - List of cities in the specified country.
   */
  static getAllCountry(): Array<City> {
    return allCountries;
  }

  /**
   * Grabs a list of cities in a specific country using its country code.
   * @param {string} countryCode - Country code to search for cities.
   * @returns {Array<City>} - List of cities in the specified country.
   */
  static getCitiesByCountryCode(countryCode: string): Array<City> {
    // Filter cities belonging to the specified country code.
    return allCountries.filter((city) => city.countryCode === countryCode);
  }

  /**
   * Hunts for a city by its name.
   * @param {string} cityName - Name of the city to look for.
   * @returns {City|null} - City data or null if not found.
   */
  static getCityByName(cityName: string): City | null {
    return (
      allCountries.find(
        (data) => data.name === cityName || data.asciiname === cityName
      ) || null
    );
  }

  // Define the static property 'sn' with the method getLists().
  static sn = {
    /**
     * Gets a list of cities in Senegal.
     * @returns {Array<City>} - List of cities in Senegal.
     */
    getLists: function (): Array<City> {
      return snData;
    },

    /**
     * Retrieves a list of departments in Senegal.
     * @returns {Array<City>} - List of departments in Senegal.
     */
    getListOfDepartments(): Array<City> {
      // Filter items in snData containing the word "Department" in their name.
      return snData.filter((data) => data.name.includes("Department"));
    },

    /**
     * Retrieves a list of regions in Senegal.
     * @returns {Array<Regions>} - List of regions in Senegal.
     */
    getRegions(): Array<Regions> {
      return regions;
    },
  };

  // Define the static property 'ml' with the method getLists().
  static ml = {
    /**
     * Gets a list of cities in Mali.
     * @returns {Array<City>} - List of cities in Mali.
     */
    getLists: function (): Array<City> {
      return mlData;
    },
  };

  /**
   * Grabs the geographic coordinates (latitude and longitude) of a city by its name.
   * @param {string} cityName - Name of the city to fetch coordinates for.
   * @returns {object|null} - Object containing coordinates {latitude, longitude} or null if the city isn't found.
   */
  static getCityCoordinates(
    cityName: string
  ): { latitude: number; longitude: number } | null {
    const city = allCountries.find(
      (data) => data.name === cityName || data.asciiname === cityName
    );
    if (!city) return null;
    if (!city.loc.coordinates) return null;

    return {
      latitude: city.loc.coordinates.lat,
      longitude: city.loc.coordinates.lng,
    };
  }
}
