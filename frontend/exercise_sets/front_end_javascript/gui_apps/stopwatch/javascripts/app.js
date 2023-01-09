// A stopwatch with four time segments

'use strict';

const CENTISECOND = 10;

class Stopwatch {
  constructor() {
    this.convFactors = {};
    this.setConstants();

    this.startTime = null;
    this.pauseTime = null;
    this.updater = null;

    this.centiseconds = this.seconds = this.minutes = this.hours = 0;
  }

  start() {
    if (this.updater) return;

    if (this.pauseTime) {
      this.accountForPause();
    } else {
      this.startTime = Number(new Date());
    }

    this.updater = setInterval(() => this.updateMetrics(), CENTISECOND);
  }

  stop() {
    if (!this.updater) return;

    clearInterval(this.updater);
    this.updater = null;
    this.pauseTime = Number(new Date());
    this.updateMetrics();
  }

  reset() {
    clearInterval(this.updater);
    this.centiseconds = this.seconds = this.minutes = this.hours = 0;
    this.updater = null;
    this.startTime = null;
    this.pauseTime = null;
    this.status = null;
  }

  updateMetrics() {
    const currentTime = Number(new Date());
    const elapsedMS = currentTime - this.startTime;
    const elapsedHours = elapsedMS / this.convFactors.MILLISECONDS_PER_HOUR;

    let fracHours, fracMinutes, fracSeconds;

    [this.hours, fracHours] = this.wholeFrac(elapsedHours);

    const elapsedMinutes = this.getMetric('minutes', fracHours);
    [this.minutes, fracMinutes] = this.wholeFrac(elapsedMinutes);

    const elapsedSeconds = this.getMetric('seconds', fracMinutes);
    [this.seconds, fracSeconds] = this.wholeFrac(elapsedSeconds);

    const elapsedCentiseconds = this.getMetric('centiseconds', fracSeconds);
    this.centiseconds = ~~elapsedCentiseconds;
  }

  getMetric(type, frac) {
    const converstions = {
      centiseconds: this.convFactors.CENTISECONDS_PER_SECOND,
      seconds: this.convFactors.SECONDS_PER_MINUTE,
      minutes: this.convFactors.MINUTES_PER_HOUR,
    };

    return frac * converstions[type];
  }

  wholeFrac(number) {
    const whole = ~~number;
    const frac = number - whole;
    return [whole, frac];
  }

  accountForPause() {
    const gap = Number(new Date() - this.pauseTime);
    this.startTime += gap;
  }

  setConstants() {
    this.convFactors.MILLISECONDS_PER_SECOND = 1000;
    this.convFactors.CENTISECONDS_PER_SECOND = 100;
    this.convFactors.SECONDS_PER_MINUTE = 60;
    this.convFactors.MINUTES_PER_HOUR = 60;

    this.convFactors.MILLISECONDS_PER_HOUR =
      this.convFactors.MILLISECONDS_PER_SECOND *
      this.convFactors.SECONDS_PER_MINUTE *
      this.convFactors.MINUTES_PER_HOUR;
  }
}

class StopwatchView {
  constructor() {
    this.elms = {
      $hours: $('.hours'),
      $minutes: $('.minutes'),
      $seconds: $('.seconds'),
      $centiseconds: $('.centiseconds'),
      $start: $('.start'),
      $stop: $('.stop'),
      $reset: $('.reset'),
    };
  }

  setMetric(name, value) {
    value = String(value);

    if (value.length === 1) value = '0' + value;
    this.elms['$' + name].text(value);
  }
}

class StopwatchApp {
  constructor(stopwatch, stopwatchView) {
    this.model = stopwatch;
    this.view = stopwatchView;

    this.viewRenderer = null;
    this.bindHandlers();
  }

  bindHandlers() {
    this.view.elms.$start.click(() => this.handleStartStopwatch());
    this.view.elms.$stop.click(() => this.handleStopStopwatch());
    this.view.elms.$reset.click(() => this.handleResetStopwatch());
  }

  handleStartStopwatch() {
    if (this.viewRenderer) return;

    this.model.start();
    this.viewRenderer = setInterval(() => this.renderMetrics(), CENTISECOND);
  }

  handleStopStopwatch() {
    if (!this.viewRenderer) return;

    this.model.stop();
    clearInterval(this.viewRenderer);
    this.viewRenderer = null;
  }

  handleResetStopwatch() {
    this.model.reset();
    clearInterval(this.viewRenderer);
    this.viewRenderer = null;
    this.renderMetrics();
  }

  renderMetrics() {
    this.view.setMetric('hours', this.model.hours);
    this.view.setMetric('minutes', this.model.minutes);
    this.view.setMetric('seconds', this.model.seconds);
    this.view.setMetric('centiseconds', this.model.centiseconds);
  }
}

new StopwatchApp(new Stopwatch(), new StopwatchView());
