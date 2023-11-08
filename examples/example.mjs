import { KibaCities } from "@kiba-org/cities";
/**
 * import { getListofDepartmentSN } from "@kiba-org/cities/region-sn.js";
 * Liste des departements du sénégal
 * console.log({ department: KibaCities.getListOfDepartments() });
 */
/**
 * All countries
 * console.log({ allCountries: KibaCities.getAllCountry() });
 */

/**
 * France 
 *  console.log({
  France: KibaCities.getCitiesByCountryCode('FR')),
});
 */

/**
 * Senegal
 * console.log({SN:KibaCities.getCitiesByCountryCode('SN')  })
 */

console.log({ RegionsSN: KibaCities.sn.getRegions() });

console.log({ ML: KibaCities.ml.getLists() });
