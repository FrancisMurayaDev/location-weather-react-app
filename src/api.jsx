const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "4292b97589msh272335f08c512c6p1bfc9cjsn23387316916f",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
