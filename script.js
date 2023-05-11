import { ShopList } from "./ShopList/index.js";

const mainElement = document.querySelector("main");

fetch("https://nakupy.kodim.app/api/sampleweek/mon")
  .then((response) => response.json())
  .then((data) => {
    mainElement.append(
      ShopList({ dayName: data.result.dayName, items: data.result })
    );
  });

fetch("https://nakupy.kodim.app/api/sampleweek/tue")
  .then((response) => response.json())
  .then((data) => {
    mainElement.append(
      ShopList({ dayName: data.result.dayName, items: data.result })
    );
  });
