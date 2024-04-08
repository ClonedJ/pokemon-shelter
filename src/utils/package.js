// ex. 'Basic Care' turns to 'basic-care'
import packages from "../assets/data/packageData.json";

export const getPackageData = (key) => {
  for (const packageObj of packages.data) {
    if (packageObj.name == key) {
      return packageObj;
    }
  }
  return null;
};
