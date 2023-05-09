const refs = {
  input: document.querySelector('input'),
  renderBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  refs.boxesDiv.append(...boxes);
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
