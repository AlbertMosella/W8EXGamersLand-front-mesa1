import GameStyles from "./GameStyles";

const Game = ({ game: { name, image, platforms, category } }) => {
  return (
    <GameStyles>
      <img src={image} alt={`portada ${name}`} />
      <h2>{name}</h2>
      <p>{category}</p>
    </GameStyles>
  );
};

export default Game;
