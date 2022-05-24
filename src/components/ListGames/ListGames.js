import { mockGames } from "../../mocks/games";
import Game from "../Game/Game";
import ListGamesStyles from "./ListGamesstyles";

const ListGames = () => {
  return (
    <ListGamesStyles>
      {mockGames.map((game) => (
        <Game />
      ))}
    </ListGamesStyles>
  );
};

export default ListGames;
