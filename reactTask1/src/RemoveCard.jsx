const RemoveCard = (id, setCards, Cards) => {
  setCards(
    Cards.filter((card) => {
      return card.id !== id;
    })
  );
};

export default RemoveCard;
