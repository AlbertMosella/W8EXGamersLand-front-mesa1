const Game = ({ name, image, platforms }) => {
  return (
    <>
      <img src={image} alt={`portada ${name}`} />
      <h2>{name}</h2>
      <div>
        {platforms.map((platform) => {
          return (
            platform === "PC" && <span>PC image</span>,
            platform === "XBOX" && <span>XBOX image</span>,
            platform === "PLAYSTATION" && <span>PLAYSTATION image</span>,
            platform === "NINTENDO" && <span>NINTENDO image</span>
          );
        })}
      </div>
    </>
  );
};

export default Game;
