import { snData } from "./index.js";

export function getListofDepartmentSN() {
  return snData.filter((data) => data.name.includes("Department"));
}
