'use strict';

const colors = [
  '#FFFFF7',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start-timer"'),
  stopBtn: document.querySelector('button[data-action="stop-timer"'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  isActive: false,
  startTimer() {
    if (this.isActive) {
      return;
    }
    (this.isActive = true),
      (this.switchInterval = setInterval(() => {
        refs.body.style.backgroundColor =
          colors[randomIntegerFromInterval(0, 5)];
      }, 1000));
  },

  stopTimer() {
    clearInterval(this.switchInterval);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', timer.startTimer.bind(timer));
refs.stopBtn.addEventListener('click', timer.stopTimer.bind(timer));
