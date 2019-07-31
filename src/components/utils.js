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

export function buildResultChartData(allResult) {
  yesHolder = { name: 'Yes' };
  noHolder = { name: 'No' };
  maybeHolder = { name: 'Maybe' };

  Object.values(CATEGORY).forEach(item => {
    yesHolder[item.DESC] = 0;
    noHolder[item.DESC] = 0;
    maybeHolder[item.DESC] = 0;
  });

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

export const chartTableCols = [
  {
    title: 'Category',
    dataIndex: 'Category'
  },
  {
    title: 'Yes',
    dataIndex: 'Yes',
    width: 120
  },
  {
    title: 'No',
    dataIndex: 'No',
    width: 120
  },
  {
    title: 'Maybe',
    dataIndex: 'Maybe',
    width: 120
  }
];

function buildData(cate) {
  // console.log(yesHolder, yesHolder[cate]);
  return {
    key: cate,
    Category: cate,
    Yes: yesHolder[cate],
    No: noHolder[cate],
    Maybe: maybeHolder[cate]
  };
}
export function buildResultTableData() {
  const a = Object.values(CATEGORY).map(item => buildData(item.DESC));
  console.log(a);
  return a;
}

export const questionData = QUESTION_DATA.map(k => ({
  ...QUESTION[k],
  key: k
}));
