// Adds a listener to an element node for event handling delegated by
// descendent nodes of the specified type.

function delegateEvent(delegatee, selector, eventType, callback) {
  const isNotElement = !(delegatee instanceof Element);
  if (isNotElement) {
    return undefined;
  }

  const handler = (event) => {
      const delegatees = delegatee.querySelectorAll(selector)
      if ([...delegatees].includes(event.target)) {
        callback(event);
      }
  }

  delegatee.addEventListener(eventType, handler);

  return true;
}

const main = document.querySelector('main');
const callback = (event) => console.log(event.target, event.currentTarget);

delegateEvent(main, 'p', 'click', callback);