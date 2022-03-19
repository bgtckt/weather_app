// функция возвращает направление ветра по значению в градусах, полученному с сервера
export function getWindDirection(data: number): string {
  if (data >= 10 && data <= 80) {
    return 'СВ';
  } else if (data >= 100 && data <= 170) {
    return 'ЮВ';
  } else if (data >= 190 && data <= 260) {
    return 'ЮЗ';
  } else if (data >= 280 && data <= 350) {
    return 'СЗ';
  } else if (data > 350 || data < 10) {
    return 'С';
  } else if (data > 80 || data < 100) {
    return 'В';
  } else if (data > 170 || data < 190) {
    return 'Ю';
  } else return 'З';
}

// функция возвращает название иконки в зависимости от описания погоды
export function getIconName(description: string): string {
  switch (description) {
    case ('ясно'): return 'sun';
    break;
    case ('облачно с прояснениями' || 'переменная облачность'): return 'partycloudy1';
    break;
    case ('переменная облачность'): return 'partycloudy1';
    break;
    case ('небольшая облачность'): return 'cloudy1';
    break;
    case ('пасмурно'): return 'cloudy2';
    break;
    case ('небольшой дождь'): return 'rainy1';
    break;
    case ('дождь'): return 'rainy2';
    break;
    case ('небольшой снег'): return 'snowy1';
    break;
    case ('снег'): return 'snowy2';
    break;
    case ('снег с дождём'): return 'snowy3';
    break;
    default: return 'sun';
  }
}