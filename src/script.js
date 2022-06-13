// const reducerSwitch = (action, string) => {
//   switch (action) {
//     case 'uppercase':
//       return string.toUpperCase();
//     case 'lowercase':
//       return string.toLowerCase();
//     case 'fence':
//       let rewriteString = '';
//       for (let i = 0; i < string.length; i++) {
//         if (i % 2 === 1) {
//           rewriteString = `${rewriteString}${string[i].toUpperCase()}`;
//         } else {
//           rewriteString = `${rewriteString}${string[i].toLowerCase()}`;
//         }
//       }
//       return rewriteString;
//     case 'capitalize':
//       return string.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`).join(' ');
//     default:
//       return string;
//   }
// };
//
// console.log(reducerSwitch('fence', 'string'));

// const consoleLoggerWordsFor = (string) => {
//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i])
//   }
// };
//
// consoleLoggerWordsFor('test')

// const consoleLoggerWordsWhile = (string) => {
//   string.split('').map ((letter) => console.log(letter))
//   // for (let i = 0 ; i < string.length ; i++) {
//   //   console.log(string[i])
//   // }
// };
//
// consoleLoggerWordsWhile('test')

const capitalizeString = (string) => string.toLowerCase().split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')

console.log(capitalizeString('test test test'))