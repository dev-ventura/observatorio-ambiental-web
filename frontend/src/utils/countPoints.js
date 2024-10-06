import * as turf from "@turf/turf";

const getCountryForFire = (firePoint, countries) => {
  const { latitude, longitude } = firePoint;
  const point = turf.point([longitude, latitude]);

  for (let country of countries.features) {
    const polygon = turf.polygon(country.geometry.coordinates);
    if (turf.booleanPointInPolygon(point, polygon)) {
      return country.properties.ADMIN;
    }
    return null;
  }
};

export default getCountryForFire;
