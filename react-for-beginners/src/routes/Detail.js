import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      setMovieDetail(json.data.movie);
	  console.log('json.data.movie: ', json.data.movie);
      setLoading(false);
    };

    getMovie();
  }, [id]);

    return (
      <div>{loading ? <h1>Loading....</h1> : <div>title: {movieDetail.title}</div>}</div>
    );
}

export default Detail;
