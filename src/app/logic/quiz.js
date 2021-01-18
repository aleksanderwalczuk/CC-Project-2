import { PEOPLE } from '../constants';

const axios = require('axios');

const gameInfo = {
  questionScope: [],
  mode: PEOPLE,
};

const validate = (url) =>
  typeof url === 'string' &&
  url.length > process.env.SW_API_BASE_URL.length;

const convertUrlToHttps = (next) => {
  if (next.charAt(4) !== 's' && typeof next === 'string')
    return `${next.substring(0, 4)}s${next.substring(4)}`;
  return next;
};

const fetchItems = (api) => {
  axios
    .get(api)
    .then((item) => item.data)
    .then(({ count, next, results }) => {
      gameInfo.questionScope.push(...results);
      if (validate(next)) {
        fetchItems(convertUrlToHttps(next));
      }
      if (count === gameInfo.questionScope.length) {
        gameInfo.questionScope = gameInfo.questionScope.map(
          (value) => ({
            name: value.name,
            idx: value.url.split('/')[5],
          }),
        );
        localStorage.setItem(
          `quiz-${gameInfo.mode}`,
          JSON.stringify(gameInfo.questionScope),
        );
      }
    })
    .catch((err) => {
      throw Error(`fetchError: ${err}`);
    });
};

const fetchQuestionScope = () => {
  gameInfo.questionScope = [];
  fetchItems(`${gameInfo.apiUrl}/${gameInfo.mode.toLowerCase()}/`);
};

const pickRandomId = () => {
  let result;
  while (result === undefined) {
    result = Math.ceil(Math.random() * gameInfo.questionScope.length);
    if (result === gameInfo.questionScope.length) {
      result = 0;
    }
    if (gameInfo.questionScope[result] === undefined) {
      result = undefined;
    }
  }
  return result;
};

const getUrlData = (id, question) => {
  fetch(`./static/assets/img/modes/${gameInfo.mode}/${id}.jpg`)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        question.image = reader.result;
      };
      reader.readAsDataURL(blob);
    })
    .catch(() => {
      question.err = 'imageError';
    });
};

const generateQuestion = () => {
  const question = {};
  if (gameInfo.questionScope.length === 0) {
    question.err = 'modeOrDataError';
    return question;
  }
  const answersIDs = [];
  while (answersIDs.length !== 4) {
    const id = pickRandomId();
    if (!answersIDs.some((fId) => fId === id)) {
      answersIDs.push(id);
    }
  }
  const correctIdIdxFromAnswers = Math.ceil(
    Math.random() * answersIDs.length,
  );
  const rightAnswer =
    correctIdIdxFromAnswers === 4
      ? answersIDs[0]
      : answersIDs[correctIdIdxFromAnswers];
  const rightAnswerApiDataId =
    gameInfo.questionScope[rightAnswer].idx;
  getUrlData(rightAnswerApiDataId, question);
  question.answers = answersIDs.map(
    (id) => gameInfo.questionScope[id].name,
  );
  question.rightAnswer = gameInfo.questionScope[rightAnswer].name;
  return question;
};

export const initGameInfo = (mode, url) => {
  gameInfo.apiUrl =
    url || process.env.SW_API_BASE_URL || 'https://swapi.dev/api';
  gameInfo.mode = mode;
  const cached = localStorage.getItem(`quiz-${mode}`) || 0;
  if (cached) {
    gameInfo.questionScope = JSON.parse(
      localStorage.getItem(`quiz-${mode}`),
    );
    return;
  }
  fetchQuestionScope();
};

export const isGameInitialized = () =>
  gameInfo.questionScope.length > 0;

export default generateQuestion;
