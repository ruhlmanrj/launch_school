/**
* In response to a submit event, obtains form parameters
* and uses them to create a list item, which is displayed.
*/

const formAddItem = document.querySelector('form.add-item');
const ulItemList = document.querySelector('.item-list ul');

formAddItem.addEventListener('submit', event => {
  event.preventDefault();

  const controlValue = name => formAddItem[name].value;

  const itemName = controlValue('item-name');
  const itemQuantity = controlValue('item-quantity') || '1';

  const liItem = document.createElement('li');
  liItem.textContent = `${itemQuantity} ${itemName}`;
  ulItemList.appendChild(liItem);

  formAddItem.reset();
});
