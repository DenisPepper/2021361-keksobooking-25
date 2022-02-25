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
    // Это поведение принято в Си, в системных функция ОС. Но
    // в последнее время в этом месте сообщество склоняется к мысли
    // что надо throw new Error('неверный аргумент')
    return -1;
  }
  // использование искаженных min и max __может__ (но не обязательно)
  // иметь неверное трактование:
  //  если аргументы 0.8, 1.2, то между ними, в общем-то,
  //  существует "случайное число 1",
  //  а твоя функция откажется работать.
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
  // Ты не поверишь, то это же бесполезная операция
  // например, число 0.1 без округления невозможно представить в IEEE 754
  // поэтому все биты все равно будут заняты делом
  // https://www.exploringbinary.com/why-0-point-1-does-not-exist-in-floating-point/#:~:text=Depending%20on%20how%20many%20bits,which%20is%200.0999755859375%20in%20decimal.
  min = Number(min.toFixed(digits));
  max = Number(max.toFixed(digits));
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  const result = Math.random() * (max - min + 1 / 10 ** (digits + 1)) + min;
  // ты не поверишь, но после этой операции,
  // результат __может__ оказаться вне диапазона.
  return Number(result.toFixed(digits));
}

getRandomFloatInclusive(0, 1, 1);
