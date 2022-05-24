import { useSelector } from "react-redux";
import Game from "../Game/Game";
import ListGamesStyles from "./ListGamesstyles";

const ListGames = () => {
  const { allGames } = useSelector((status) => status.games);

  return (
    <ListGamesStyles>
      {allGames.map((game) => (
        <Game game={game} key={game.id} />
      ))}
    </ListGamesStyles>
  );
};

export default ListGames;
