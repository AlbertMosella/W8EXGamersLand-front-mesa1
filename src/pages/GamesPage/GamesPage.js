import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListGames from "../../components/ListGames/ListGames";
import { loadGamesThunk } from "../../redux/thunks/gamesThunks";

const GamesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGamesThunk());
  }, [dispatch]);

  return (
    <>
      <header>
        <button>Logout</button>
      </header>
      <h2>Games</h2>
      <ListGames />
    </>
  );
};

export default GamesPage;
