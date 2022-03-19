import axios from "axios";
import { ICity } from "../types/city";
import { IForecast } from "../types/forecast";

// экспорт кастомного класса для отправки запросов к серверу
export default class PostService {

  // получение данных о текущей погоде в городе
  static async getCityData(city: string) {
    return await axios.get<ICity>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3751ba788ee94c18563e83a7e54362a`, {
      params: {
        lang: 'ru',
        units: 'metric'
      }
    });
  }

  // получение прогноза о погоде в городе на неделю
  static async getWeatherByDays(lat: number, lon: number) {
    return await axios.get<IForecast>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e3751ba788ee94c18563e83a7e54362a&exclude=hourly,minutely,current,alerts`, {
      params: {
        lang: 'ru',
        units: 'metric'
      }
    });
  }
}
