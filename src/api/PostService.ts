import axios from "axios";
import { ICity } from "../types/city";
import { IForecast } from "../types/forecast";

// экспорт кастомного класса для отправки запросов к серверу
export default class PostService {

  // получение данных о текущей погоде в городе
  static async getCityData(city: string) {
    return await axios.get<ICity>(`https://api.openweathermap.org/data/2.5/weather?q=${city}`, {
      params: {
        appid: process.env.REACT_APP_WEATHER_KEY,
        lang: 'ru',
        units: 'metric'
      }
    });
  }

  // получение прогноза о погоде в городе на неделю
  static async getWeatherByDays(lat: number, lon: number) {
    return await axios.get<IForecast>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current,alerts`, {
      params: {
        appid: process.env.REACT_APP_WEATHER_KEY,
        lang: 'ru',
        units: 'metric'
      }
    });
  }
}
