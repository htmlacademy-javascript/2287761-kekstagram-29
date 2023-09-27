import {getRandomInteger, getPhotoId, getCommentId, getRandomArrayElement} from './util.js';

const DESCRIPTION_PHOTO = [
  'Друзья',
  'Поле',
  'Лодка',
  'Река',
  'Красивые люди',
  'Море',
  'Пальма',
  'Компьютер',
  'Пляж',
  'Набережная',
  'Лес',
  'Дерево',
  'Цветок',
  'Небо',
  'Фрукты',
  'Зима',
  'Лето',
  'Осень',
  'Листва',
  'Домик',
  'Замок',
  'Пустыня',
  'Луг',
  'Сад',
  'Дворик'
];

const COMMENTATOR_NAMES = [
  'Иван',
  'Максим',
  'Мария',
  'Никита',
  'Анна',
  'Владислав',
  'Артем',
  'Анатолий',
  'Евгений',
  'Евгения',
  'Светлана',
  'Сергей',
  'Михаил',
  'Ольга',
  'Елена',
  'Азат',
  'Александр',
  'Анастасия',
  'Виталий',
  'Кристина',
  'Эмма',
  'Арина',
  'Алина',
  'Юлия',
  'Илья'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_COUNT = 25;

const createTextComment = () => {
  let randomCountSentence = getRandomInteger(1, 2);
  const commentsCopy = COMMENTS.slice(0);
  let text = '';

  for (randomCountSentence; randomCountSentence > 0; randomCountSentence--) {
    const randomCommentsIndex = getRandomInteger(0, commentsCopy.length - 1);

    if (randomCountSentence !== 1) {
      commentsCopy[randomCommentsIndex] = `${commentsCopy[randomCommentsIndex]} `;
    }

    text += commentsCopy[randomCommentsIndex];
    commentsCopy.splice(randomCommentsIndex, 1);
  }

  return text;
};

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createTextComment(),
  name: getRandomArrayElement(COMMENTATOR_NAMES)
});

const createPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_PHOTO),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const createGallery = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

export {createGallery};
