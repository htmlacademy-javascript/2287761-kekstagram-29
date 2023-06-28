// Функция проверки на длинну строки
function isTextLength (text, amountLetter) {
  return text.length <= amountLetter;
}

// Функция проверки на палиндром
function isPalindrom (text) {
  let reverseText = '';
  const NORMALIZE_TEXT = text.replaceAll(' ', '').toLowerCase();
  for(let i = NORMALIZE_TEXT.length - 1; i >= 0 ; i--) {
    reverseText += NORMALIZE_TEXT[i];
  }

  return reverseText === NORMALIZE_TEXT;
}

// Функция получения числа из стрки
function getNumber(text) {
  let number = '';
  const NORMALIZE_TEXT = text.toString().replaceAll(' ', '');

  for(let i = 0; i < NORMALIZE_TEXT.length ; i++) {
    if (!isNaN(NORMALIZE_TEXT[i])){
      NORMALIZE_TEXT[i].toString();
      number += NORMALIZE_TEXT[i];
    }
  }
  return parseInt(number, 10);
}

isTextLength ('проверяемая строка', 20);
isPalindrom ('топот');
getNumber('1 кефир, 0.5 батона');
