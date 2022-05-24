import GameStyles from "./GameStyles";

const Game = ({ game: { name, image, platforms, category } }) => {
  return (
    <GameStyles className="game">
      <div className="game__image">
        <img src={image} alt={`portada ${name}`} />
      </div>
      <div className="game__info">
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
    </GameStyles>
  );
};

export default Game;
