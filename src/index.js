/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString (string) {
  let rewriteString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
      rewriteString = `${rewriteString}${string[i].toUpperCase()}`;
    } else {
      rewriteString = `${rewriteString}${string[i].toLowerCase()}`;
    }
  }
  return rewriteString;
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string) {
  if (action === 'uppercase') {
    return string.toUpperCase();
  } else if (action === 'lowercase') {
    return string.toLowerCase();
  } else if (action === 'fence') {
    let rewriteString = '';
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 1) {
        rewriteString = `${rewriteString}${string[i].toUpperCase()}`;
      } else {
        rewriteString = `${rewriteString}${string[i].toLowerCase()}`;
      }
    }
    return rewriteString;
  } else if (action === 'capitalize') {
    return string.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');
  } else {
    return string;
  }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase();
    case 'lowercase':
      return string.toLowerCase();
    case 'fence':
      let rewriteString = '';
      for (let i = 0; i < string.length; i++) {
        if (i % 2 === 1) {
          rewriteString = `${rewriteString}${string[i].toUpperCase()}`;
        } else {
          rewriteString = `${rewriteString}${string[i].toLowerCase()}`;
        }
      }
      return rewriteString;
    case 'capitalize':
      return string.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');
    default:
      return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (let letter of string) {
    console.log(letter)
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i])
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let i = 0;
  while (i < string.length) {
    console.log(string[i])
    ++i;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
  string.split('').map ((letter) => console.log(letter))
};
