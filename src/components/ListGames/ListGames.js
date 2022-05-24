import { useSelector } from "react-redux";
import Game from "../Game/Game";
import ListGamesStyles from "./ListGamesstyles";

const ListGames = () => {
  const games = useSelector((state) => state.games);

  return (
    <ListGamesStyles>
      {games.map((game) => (
        <Game game={game} />
      ))}
    </ListGamesStyles>
  );
};

export default ListGames;
