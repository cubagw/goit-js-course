'use strict';
import quizData from './quiz-data.js';

console.log(quizData);

// ------СОЗДАНИЕ РАЗМЕТКИ----- //

const form = document.querySelector('.form');
const button = document.querySelector('.button');
button.setAttribute('type', 'submit');

const makeHtmlForm = function(tag, data) {
  form.classList.add('form');
  button.classList.add('button');
  const formTitle = document.createElement('h2');
  formTitle.textContent = data.title;
  formTitle.classList.add('formTitle');
  tag.prepend(formTitle);

  data.questions.map(question => {
    const sectionOfQuestion = document.createElement('section');
    sectionOfQuestion.classList.add('form-sectionOfQuestion');
    const textOFquestion = document.createElement('h3');
    textOFquestion.textContent = question.question;
    const listOfAnswers = document.createElement('ol');
    let counter = 1;

    question.choices.map(choice => {
      const listItemOfAnswer = document.createElement('li');
      const answerLabel = document.createElement('label');
      answerLabel.classList.add('form-answerLabel');
      const answerLabelInput = document.createElement('input');
      answerLabelInput.setAttribute('type', 'radio');
      answerLabelInput.classList.add('form-input');
      answerLabel.textContent = choice;
      answerLabel.prepend(answerLabelInput);
      listItemOfAnswer.prepend(answerLabel);
      listOfAnswers.prepend(listItemOfAnswer);
      const indexOfquestion = data.questions.indexOf(question);
      answerLabelInput.setAttribute(
        'name',
        `section_number_${counter + indexOfquestion}`,
      );
      const indexOfAnswer = question.choices.indexOf(choice);

      answerLabelInput.setAttribute('value', indexOfAnswer);
    });

    sectionOfQuestion.prepend(textOFquestion);
    sectionOfQuestion.append(listOfAnswers);
    button.before(sectionOfQuestion);
  });
};

makeHtmlForm(form, quizData);

// ------СБОР ДАННЫХ----- //

form.addEventListener('change', checkAllInputs);
form.addEventListener('submit', handleGetResult);

function checkAllInputs(event) {
  const objOfAnswers = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    objOfAnswers[name] = value;
  });
  const arrOfUserAnswers = Object.values(objOfAnswers);

  const arrOfRightAnswers = quizData.questions.map(question => question.answer);

  const arrayRightAnswersLength = arrOfRightAnswers.length;

  if (arrOfUserAnswers.length === arrayRightAnswersLength) {
    button.removeAttribute('disabled');
  }
}

function handleGetResult(event) {
  event.preventDefault();
  const objOfAnswers = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    objOfAnswers[name] = value;
  });
  const arrOfUserAnswers = Object.values(objOfAnswers);

  const arrOfRightAnswers = quizData.questions.map(question => question.answer);
  const arrayRightAnswersLength = arrOfRightAnswers.length;

  const arrayOfRightUserAnswers = arrOfUserAnswers.filter(
    (el, index) => Number(el) === arrOfRightAnswers[index],
  );
  const rightUserAnswersLength = arrayOfRightUserAnswers.length;

  const points = (rightUserAnswersLength / arrayRightAnswersLength) * 100;

  if (arrOfUserAnswers.length > arrayRightAnswersLength) {
    button.removeAttribute(disabled);
  }

  if (points >= 80) {
    alert(
      `Позравляем!!! Вы ответили правильно на ${Math.ceil(
        points,
      )}% и  прошли тест`,
    );
  } else {
    alert(
      `К сожалению вы ответили правильно всего на  ${Math.ceil(
        points,
      )}% и не прошли тест`,
    );
  }
}
