import { movieDatabaseAPI, token } from "variables/api";

const headers = new Headers({
  Authorization: `Bearer ${token}`,
});

const getMovies = async (page: number) => {
  const URL = `${movieDatabaseAPI}/movie/now_playing`;
  const data = await (
    await fetch(`${URL}?page=${page}`, { headers: headers })
  ).json();
  return data.results;
};

export default getMovies;
