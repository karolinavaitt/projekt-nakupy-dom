import { ListItem } from '../ListItem/index.js';

export const ShopList = (props) => {
  const { day, dayResult } = props;

  let dayName = 'Načítám...';
  if (dayResult !== 'loading') {
    dayName = dayResult.dayName;
  }

  const element = document.createElement('div');
  element.classList.add('shoplist');
  element.innerHTML = `
    <div class="shoplist__head">
      <h2 class="shoplist__day">${dayName}</h2>
    </div>
    <div class="shoplist__items"></div>
  `;

  if (dayResult === 'loading') {
    fetch(`https://nakupy.kodim.app/api/sampleweek/${day}`)
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(
          ShopList({
            day: day,
            dayResult: data.result,
          })
        );
      });
    return element;
  } 

  const itemsElement = element.querySelector('.shoplist__items');
  itemsElement.append(...dayResult.items.map((item) => ListItem(item)));

  return element;
};
