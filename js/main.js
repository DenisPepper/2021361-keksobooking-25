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

//
//предлагаю подумать над функцией - для целых чисел: случайное число больше или равно нижней границе но строго меньше верхней

function randomInt (min, max){
  //min должно быть целым числом прямо на входе
  if( !Number.isInteger(min)){
    throw new Error('min должен быть целым числом');
  }
  if(!Number.isInteger(max)){
    throw new Error('max должен быть целым числом');
  }
  if( min <0){
    throw new Error('min должен быть 0 или больше');
  }
  if( max <=min){
    throw new Error('неверный интервал');
  }
  return Math.floor((max-min)*Math.random() + min);
}

// вариант с включенной верхней границей для целых чисел
// выводится из "без включения"
function getRandomIntInclusive2 (min, max){
  return randomInt(min, max+1);
}

// обрати внимание что if проверяет то что нам нужно, а не обратную сторону, потому
// как среди числе могут быть Number.Infinity Number.NaN и прочие числа-не-числа
// они дает сравнение false со всем подряд
function getRandomFloatInclusive2(min, max, precision){
  if(min >= 0){
    if(max <= min){
      if(precision>=0){
        const randomResult = (max-min)*Math.random()+min;
        if(randomResult<min){
          return min;
        }
        if(randomResult>max){
          return max;
        }
        return randomResult;
      }
      throw new Error('точность должна быть больше нуля')
    }
    throw new Error('max должен быть больше min')
  }
  throw new Error('min должен быть больше нуля')
}
