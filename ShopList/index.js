import { ListItem } from "../ListItem/index.js";

export const ShopList = (props) => {
  const { dayName, items } = props;

  const element = document.createElement("div");
  element.classList.add("shoplist");
  element.innerHTML = `
    <div class="shoplist__head">
      <h2 class="shoplist__day">${dayName}</h2>
    </div>
    <div class="shoplist__items"></div>
  `;

  const itemsElement = element.querySelector(".shoplist__items");
  itemsElement.append(...items.map((item) => ListItem(item)));

  return element;
};
