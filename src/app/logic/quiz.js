let baseApi;
let questionScope = [];
let type = '';

const fetchItems = (api) => {
  fetch(api)
    .then((item) => item.json())
    .then((item) => {
      questionScope.push(...item.results);
      if (item.next !== null) {
        fetchItems(item.next);
      }
      if (item.count === questionScope.length) {
        sessionStorage.setItem(type, JSON.stringify(questionScope));
      }
    })
    .catch((err) => {
      throw Error(`fetchError: ${err}`);
    });
};

const fetchQuestionScope = () => {
  questionScope = [];
  fetchItems(`${baseApi}/${type}/`);
};

const pickRandomId = () => {
  let result;
  while (result === undefined) {
    result = Math.ceil(Math.random() * questionScope.length);
    if (result === questionScope.length) {
      result = 0;
    }
    if (questionScope[result] === undefined) {
      result = undefined;
    }
  }
  return result;
};

const getUrlData = (id, question) => {
  fetch(`/static/assets/img/modes/${type}/${id}.jpg`)
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
  if (questionScope.length === 0) {
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
  let correctIdIdxFromAnswers = Math.ceil(
    Math.random() * answersIDs.length,
  );
  if (correctIdIdxFromAnswers === 4) {
    correctIdIdxFromAnswers = 0;
  }
  const rightAnswer = answersIDs[correctIdIdxFromAnswers];
  const rightAnswerApiDataId = questionScope[rightAnswer].url.split(
    '/',
  )[5];
  getUrlData(rightAnswerApiDataId, question);
  question.answers = answersIDs
    .map((id) => questionScope[id])
    .map((item) => item.name);
  question.rightAnswer = questionScope[rightAnswer].name;
  return question;
};

export const initGame = (mode, url) => {
  baseApi = url || process.env.SW_API_BASE_URL;
  type = mode;
  if (sessionStorage.getItem(mode) !== null) {
    questionScope = JSON.parse(sessionStorage.getItem(mode));
  } else {
    fetchQuestionScope();
  }
};

export const getQuestion = () => generateQuestion();
export const isGameInitialized = () => questionScope.length > 0;
