import GameStyles from "./GameStyles";

const Game = ({ game: { name, image, platforms, category } }) => {
  return (
    <GameStyles>
      <img src={image} alt={`portada ${name}`} />
      <h2>{name}</h2>
      <p>{category}</p>
      <div>
        {platforms.map((platform) => {
          return (
            platform.name === "PC" && <span>PC image</span>,
            platform.name === "XBOX" && <span>XBOX image</span>,
            platform.name === "PLAYSTATION" && <span>PLAYSTATION image</span>,
            platform.name === "NINTENDO" && <span>NINTENDO image</span>
          );
        })}
      </div>
    </GameStyles>
  );
};

export default Game;
