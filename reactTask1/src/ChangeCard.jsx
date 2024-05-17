const ChangeCard = (id, setCards, Cards) => {
  setCards(
    Cards.map((card) => {
      if (id === card.id) {
        return { ...card, isDone: !card.isDone };
      } else {
        return card;
      }
    })
  );
};

export default ChangeCard;
