import { createCharacterCard } from "./card";

// test complicated because need to test jsdom elements..., leave for later

test("gives out a html card-element with the passed arguments for imagesource, charactername, status, type and occurencies", () => {
  const result = createCharacterCard(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "Rick Sanchez",
    "Alive",
    "",
    51
  );
  expect(result).toBe(true);
});

test("gives out a html card-element with the passed arguments for imagesource, charactername, status, type and occurencies", () => {
  const result = createCharacterCard(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "Rick Sanchez",
    "Alive",
    "",
    51
  );
  expect(result.innerHTML).toBe(`
      <div class="card__image-container">
        <img
          class="card__image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content">
        <h2 class="card__title">Rick Sanchez</h2>
        <dl class="card__info">
          <dt class="card__info-title">Status</dt>
          <dd class="card__info-description">Alive</dd>
          <dt class="card__info-title">Type</dt>
          <dd class="card__info-description"></dd>
          <dt class="card__info-title">Occurrences</dt>
          <dd class="card__info-description">51</dd>
        </dl>
      </div>`);
});
