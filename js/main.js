/**
 * Функция возвращает случайное целого число в заданном интервале, включительно
 * @param {number} min - Первое положительное число, включая "0"
 * @param {number} max - Второе положительное число, больше первого
 * {@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 */
function getRandomIntInclusive(min, max) {
  // очень-очень плохая практика изменять значение
  // полученного аргумента
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || min >= max) {
    // Это поведение принято в Си, там плохо с исключениями (раньше было)
    // в последнее время в этом месте сообщество склоняется к мысли
    // что надо throw new Error('неверный аргумент')
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(0, 1);

/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
 * @param {number} min      - Первое положительное число, включая "0"
 * @param {number} max      - Второе положительное число, больше первого
 * @param {number} digits   - количество знаков после запятой, значения от 0 до 20 включительно
 * {@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 */
function getRandomFloatInclusive(min, max, digits) {
  min = Number(min.toFixed(digits));
  max = Number(max.toFixed(digits));
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  const result = Math.random() * (max - min + 1 / 10 ** (digits + 1)) + min;
  return Number(result.toFixed(digits));
}

getRandomFloatInclusive(0, 1, 1);
