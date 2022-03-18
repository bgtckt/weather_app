// интерфейсы с типами данных для информации о погоде на неделю
interface ITemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface IFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

interface IDailyWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IDaily {
  dt: number;
  sunrise: number;
  moonrise: number;
  sunset: number;
  moonset: number;
  moon_phase: number;
  temp: ITemp;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IDailyWeather[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface IForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: IDaily[];
}