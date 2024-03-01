export function createCharacterCard(
  imageSource,
  characterName,
  status,
  type,
  occurencies
) {
  const characterCard = document.createElement("li");
  characterCard.classList.add("card");

  const cardImageContainer = document.createElement("div");
  cardImageContainer.classList.add("card__image-container");
  characterCard.append(cardImageContainer);

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.setAttribute("src", imageSource);
  cardImage.setAttribute("alt", characterName);
  cardImageContainer.append(cardImage);

  const cardImageGradient = document.createElement("div");
  cardImageGradient.classList.add("card__image-gradient");
  cardImageContainer.append(cardImageGradient);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card__content");
  characterCard.append(cardContent);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.textContent = characterName;
  cardContent.append(cardTitle);

  const cardInfo = document.createElement("dl");
  cardInfo.classList.add("card__info");
  cardContent.append(cardInfo);

  function descriptionListPairs(dtContent, ddContent) {
    const descriptionTitle = document.createElement("dt");
    descriptionTitle.classList.add("card__info-title");
    descriptionTitle.textContent = dtContent;
    cardInfo.append(descriptionTitle);

    const description = document.createElement("dd");
    description.classList.add("card__info-description");
    description.textContent = ddContent;
    cardInfo.append(description);
  }

  descriptionListPairs("Status", status);
  descriptionListPairs("Type", type);
  descriptionListPairs("Occurencies", occurencies);

  return characterCard;
}
