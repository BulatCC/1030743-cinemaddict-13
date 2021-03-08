import Abstract from "../view/abstract-view.js";
export const siteBodyTag = document.querySelector(`body`);
export const siteHeaderTag = document.querySelector(`.header`);
export const siteMainTag = document.querySelector(`.main`);
export const moviesNumberInDB = document.querySelector(`.footer__statistics`);
export const filmList = document.querySelector(`.films-list__container`);

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElements = (arr, toString = false) => {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[getRandomInteger(0, arr.length - 1)]);
  }

  if (toString) {
    return Array.from(set).join(`, `);
  }
  return Array.from(set);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const remove = (component) => {
  if (!(component instanceof Abstract)) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};

export const sortByDate = (a, b) => {
  return Date.parse(b.releaseDate.year + `-` + b.releaseDate.month + `-` + b.releaseDate.day) - Date.parse(a.releaseDate.year + `-` + a.releaseDate.month + `-` + a.releaseDate.day);
};

export const sortByRating = (a, b) => {
  return b.rating - a.rating;
};
