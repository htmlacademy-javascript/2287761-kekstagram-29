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

//Функция перевода времени в минуты
const getTimeInMinutes = (time) => {

  const TIME_HOURS = +time.split(':')[0];
  const TIME_MINUTES = +time.split(':')[1];

  return TIME_HOURS * 60 + TIME_MINUTES;
};

//Функция проверки рабочего времени
const isWorkTime = (startWorkTime, endWorkTime, startMeeting, durationMeeting) => {

  const START_MEETING_IN_MINUTES = getTimeInMinutes(startMeeting);
  const END_MEETING_IN_MINUTES = START_MEETING_IN_MINUTES + durationMeeting;

  if (getTimeInMinutes(startWorkTime) <= START_MEETING_IN_MINUTES && getTimeInMinutes(endWorkTime) >= END_MEETING_IN_MINUTES) {
    return true;
  }

  return false;
};


isWorkTime('08:00', '17:30', '14:00', 90);
isWorkTime('8:0', '10:0', '8:0', 120);
isWorkTime('08:00', '14:30', '14:00', 90);
isWorkTime('14:00', '17:30', '08:0', 90);
isWorkTime('8:00', '17:30', '08:00', 900);
isTextLength('проверяемая строка', 20);
isPalindrom('топот');
getNumber('1 кефир, 0.5 батона');
