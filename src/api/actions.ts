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

const API_URL = "https://ideal-telegram-r44gwv97pjjq2wxqv-3000.app.github.dev/api";

export const getCarData = async (manufacturer: string): Promise<CarsData> => {
  return new Promise<CarsData>((resolve, reject) => {
    axios
      .get(`${API_URL}/car/${manufacturer}`)
      .then((res) => {
        resolve({
          manufacturer: manufacturer,
          model: res.data.model,
          year: res.data.year,
          color: res.data.color,
          fuelType: res.data.fuelType,
          mileage: res.data.mileage,
          price: res.data.price,
          dateAdded: res.data.dateAdded
        });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("Car not found");
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
