import axios from "axios";

// экспорт кастомного класса для отправки запросов к серверу
export default class PostService {

  static async getCityData(city) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=ru&units=metric`);
  }
}