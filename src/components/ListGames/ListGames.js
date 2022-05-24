import { useSelector } from "react-redux";
import Game from "../Game/Game";
import ListGamesStyles from "./ListGamesstyles";

const ListGames = () => {
  const games = useSelector((state) => games.state);

  return (
    <ListGamesStyles>
      {games.map((game) => (
        <Game />
      ))}
    </ListGamesStyles>
  );
};

export default ListGames;
