import AbstractView from "./abstract-view.js";

const filmSectionTemplate = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"></div>
  </section>
</section>`;
};

export default class FilmSection extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return filmSectionTemplate();
  }
}
