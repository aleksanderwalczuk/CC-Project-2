let baseApi;
let questionScope = [];
let type = '';
const question = {};

async function fetchItems(api) {
  await fetch(api)
    .then((item) => item.json())
    .then((item) => {
      questionScope.push(...item.results);
      if (item.next !== null) {
        fetchItems(item.next);
      }
    });
}

function fetchQuestionScope() {
  questionScope = [];
  fetchItems(baseApi + '/' + type + '/');
  console.log(questionScope);
}

function pickRandomId() {
  let result = undefined;
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
}

let img = '';
async function getUrlData(id) {
  await fetch(`/static/assets/img/modes/${type}/${id}.jpg`)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.onload = () => (question.image = reader.result);
      reader.readAsDataURL(blob);
    });
}

function generateQuestion() {
  if (questionScope.length === 0) {
    return;
  }
  const ids = [];
  while (ids.length !== 4) {
    let id = pickRandomId();
    if (!ids.some((fId) => fId === id)) {
      ids.push(id);
    }
  }
  let correctIdIdx = Math.ceil(Math.random() * ids.length);
  if (correctIdIdx === 4) {
    correctIdIdx = 0;
  }
  getUrlData(ids[correctIdIdx]);
  question.answers = ids
    .map((id) => questionScope[id])
    .map((item) => item.name);
  question.rightAnswer = questionScope[ids[correctIdIdx]]['name'];
}

export const initGame = (mode, url) => {
  baseApi = url || 'https://swapi.dev/api';
  type = mode;
  fetchQuestionScope();
};

export const getQuestion = () => {
  setTimeout(() => generateQuestion(), 500);
  return question;
};
