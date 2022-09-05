// Tracks data pertaining to all events fired, storing them in a `tracker`
// object.

class Tracker {
  #events = [];
  #targets = [];

  get events() {
    return [...this.#events];
  }

  get targets() {
    return [...this.#targets];
  }

  addEvent(event) {
    this.#events.push(event);
    this.#addTarget(event.target);
  }

  clear() {
    this.#events.length = 0;
    this.#targets.length = 0;
  }

  #addTarget(target) {
    this.#targets.push(target);
  }
}

function track(callback) {
  return (event) => {

    // Makes sure that the event is added to tracker only once per cycle
    if (event.target === event.currentTarget) {
      eventTracker.addEvent(event);
    }

    callback(event);
  };
}
