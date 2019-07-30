import { ANSWER, CATEGORY, QUESTION, QUESTION_DATA } from '../asset/data';

let yesHolder = { name: 'Yes' };
let noHolder = { name: 'No' };
let maybeHolder = { name: 'Maybe' };

function switchOnAnswer(answer, categoryName) {
  switch (answer) {
    case '0':
      noHolder = {
        ...noHolder,
        [categoryName]: noHolder[categoryName] ? noHolder[categoryName] + 1 : 1
      };
      break;
    case '1':
      yesHolder = {
        ...yesHolder,
        [categoryName]: yesHolder[categoryName]
          ? yesHolder[categoryName] + 1
          : 1
      };
      break;
    case '2':
      maybeHolder = {
        ...maybeHolder,
        [categoryName]: maybeHolder[categoryName]
          ? maybeHolder[categoryName] + 1
          : 1
      };
      break;
    default:
      break;
  }
}

export function buildChartData(allResult) {
  yesHolder = { name: 'Yes' };
  noHolder = { name: 'No' };
  maybeHolder = { name: 'Maybe' };

  allResult.forEach(v => {
    const { CATE, answer } = v;
    const categoryName = CATEGORY[CATE].DESC;
    switch (CATE) {
      case 1:
        switchOnAnswer(answer, categoryName);
        break;
      case 2:
        switchOnAnswer(answer, categoryName);
        break;
      case 3:
        switchOnAnswer(answer, categoryName);
        break;
      case 4:
        switchOnAnswer(answer, categoryName);
        break;
      default:
        break;
    }
  });

  return [yesHolder, noHolder, maybeHolder];
}

function getCateCounts(cate) {
  return { Yes: yesHolder[cate], No: noHolder[cate], Maybe: maybeHolder[cate] };
}
export function buildTableData() {
  Object.values(CATEGORY).map(item => item.DESC);
}

export const questionData = QUESTION_DATA.map(k => ({
  ...QUESTION[k],
  key: k
}));
