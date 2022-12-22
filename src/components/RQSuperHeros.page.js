import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeros
  );

  if (isLoading) return <h2>Loading....</h2>;

  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <h2>{hero.name}</h2>
      ))}
    </>
  );
};
export default RQSuperHeroesPage;
