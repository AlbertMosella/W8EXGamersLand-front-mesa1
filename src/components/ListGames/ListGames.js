import { useSelector } from "react-redux";
import Game from "../Game/Game";
import ListGamesStyles from "./ListGamesstyles";

const ListGames = () => {
  const { allGames } = useSelector((status) => status.games);

  return (
    <ListGamesStyles>
      <h3>List of all games</h3>
      {allGames.map((game) => (
        <Game game={game} key={game.id} />
      ))}
    </ListGamesStyles>
  );
};

export default ListGames;
