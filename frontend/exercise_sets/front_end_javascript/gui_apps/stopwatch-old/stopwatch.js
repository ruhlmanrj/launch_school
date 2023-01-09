/**
 * Features:
 *  - Stopwatch/timer with 4 measurements
 *  - Can pause/resume timer
 *  - Can reset timer at any time
 */

class Timer {
  constructor() {
    this.centiseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;

    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => this.incrementCentiseconds(),
    10)
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.stop();

    this.centiseconds = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }

  incrementCentiseconds() {
    this.centiseconds++

    if (this.centiseconds >= 100) {
      this.centiseconds = 0;
      this.incrementSeconds();
    }
  }

  incrementSeconds() {
    this.seconds++

    if (this.seconds >= 60) {
      this.seconds = 0;
      this.incrementMinutes();
    }
  }

  incrementMinutes() {
    this.minutes++

    if (this.minutes >= 60) {
      this.minutes = 0;
      this.incrementHours();
    }
  }

  incrementHours() {
    this.hours++
  }

  toString() {
    const padded = num => String(num).padStart(2, '0');

    return [
      this.hours,
      this.minutes,
      this.seconds,
      this.centiseconds
    ]
    .map(padded)
    .join(' : ');
  }
}

class ViewTimer {
  constructor(timer) {
    this.timer = timer;
    this.interval = null;

    this.display = document.querySelector('#timer');

    this.startBtn = document.querySelector('#start-btn');
    this.stopBtn = document.querySelector('#stop-btn');
    this.resetBtn = document.querySelector('#reset-btn');

    this.bind();
  }

  bind() {
    this.startBtn.addEventListener('click', this.startTimer.bind(this));
    this.stopBtn.addEventListener('click', this.stopTimer.bind(this));
    this.resetBtn.addEventListener('click', this.resetTimer.bind(this));
  }

  startTimer() {
    this.timer.start();

    this.interval = setInterval(() => this.renderTimer(),
    10);

    this.showStopBtn();
  }

  stopTimer() {
    this.timer.stop();
    clearInterval(this.interval);

    this.showStartBtn();
  }

  resetTimer() {
    this.timer.reset();
    clearInterval(this.interval);

    this.renderTimer();
    this.showStartBtn();
  }

  renderTimer() {
    this.display.textContent = String(this.timer);
  }

  showStartBtn() {
    this.stopBtn.hidden = true;
    this.startBtn.hidden = false;
  }

  showStopBtn() {
    this.startBtn.hidden = true;
    this.stopBtn.hidden = false;
  }
}

const viewTimer = new ViewTimer(new Timer)