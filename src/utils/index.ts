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