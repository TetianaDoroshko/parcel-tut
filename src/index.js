import colorCardTpl from './templates/color-card.hbs';
import colorCardsTpl from './templates/color-cards.hbs';

import colors from './colors.json';
import './style.css';

// //-----------------colorpicker-----------------------------

// console.log(colorCardTpl(colors));

const paletteContainer = document.querySelector('.js-palette');

const cardsMarkUp = CreaetColorCardsMarkup(colors);

//   // -----создает разметку 1 карточки
// function CreaetColorCardsMarkup(colors) {
//   return colors.map(color => colorCardTpl(color)).join('');
// }

//   // -----создает разметку всех коллекции карточе к сразу
function CreaetColorCardsMarkup(colors) {
  return colorCardsTpl(colors);
}

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkUp);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function onPaletteContainerClick(event) {
  if (!event.target.classList.contains('color-swatch')) {
    return;
  }
  onActiveCardClassRemove();
  onActiveCardClassAdd(event);
  setBodyColor(event);
}

function onActiveCardClassRemove() {
  const currentCard = paletteContainer.querySelector('.is-active');
  currentCard?.classList.remove('is-active');
}

function onActiveCardClassAdd(event) {
  event.target.closest('.color-card').classList.add('is-active');
}

function setBodyColor(event) {
  document.body.style.backgroundColor = event.target.dataset.hex;
}
//-----------------------------------------------------------
