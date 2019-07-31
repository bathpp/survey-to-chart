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

export function buildResultTableData() {
  const yesHolderTemp = { ...yesHolder };
  const noHolderTemp = { ...noHolder };
  const maybeHolderTemp = { ...maybeHolder };
  Object.values(CATEGORY).forEach(item => {
    if (!yesHolderTemp[item.DESC]) {
      yesHolderTemp[item.DESC] = 0;
    }
    if (!noHolderTemp[item.DESC]) {
      noHolderTemp[item.DESC] = 0;
    }
    if (!maybeHolderTemp[item.DESC]) {
      maybeHolderTemp[item.DESC] = 0;
    }
  });
  return Object.values(CATEGORY).map(({ DESC }) => ({
    key: DESC,
    Category: DESC,
    Yes: yesHolderTemp[DESC],
    No: noHolderTemp[DESC],
    Maybe: maybeHolderTemp[DESC]
  }));
}

export const questionData = QUESTION_DATA.map(k => ({
  ...QUESTION[k],
  key: k
}));
