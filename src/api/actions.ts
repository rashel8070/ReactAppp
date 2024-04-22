import axios, { AxiosError } from "axios";

// const API_URL = "https://didactic-journey-wrr7xj6v55rqc9r74-3000.app.github.dev/api";

// export const getWeatherData = async (city: string): Promise<WeatherData> => {
//   return new Promise<WeatherData>((resolve, reject) => {
//     axios
//       .get(`${API_URL}/weather/${city}`)
//       .then((res) => {
//         resolve({
//           city: city,
//           temperature: res.data.temperature,
//           humidity: res.data.humidity,
//           wind: res.data.wind,
//           rain: res.data.rain,
//         });
//       })
//       .catch((error) => {
//         if (axios.isAxiosError(error)) {
//           const axiosError = error as AxiosError;
//           if (axiosError.response?.status === 404) {
//             reject("City not found");
//           } else {
//             // It's a good practice to reject with an Error object
//             reject(axiosError.message);
//           }
//         } else {
//           // Handle non-Axios errors
//           reject("An unknown error occurred");
//         }
//       });
//   });
// };

const API_URL = "https://legendary-sniffle-jx55jvp677pfpv6q-3000.app.github.dev/";

export const getfootballdata = async (country: string): Promise<FootBallData> => {
  return new Promise<FootBallData>((resolve, reject) => {
    axios
      .get(`${API_URL}/car/${country}`)
      .then((res) => {
        resolve({
          country: res.data.country,
          title: res.data.title,
          runnerup: res.data.runnerup,
          ranking: res.data.ranking,
          
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Country not found");
          } else {
            // It's a good practice to reject with an Error object
            reject(axiosError.message);
          }
        } else {
          // Handle non-Axios errors
          reject("An unknown error occurred");
        }
      });
  });
};
