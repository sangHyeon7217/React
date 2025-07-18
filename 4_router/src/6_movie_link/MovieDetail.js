import { Link, useParams } from "react-router-dom";

const MovieDetail =(props)=>{

    const {idx} =useParams();
const movie =props.movies[idx];

    

    return(
        <div>
            <h3>{props.movies[idx].title}({props.movies[idx].year})</h3>
           
            {/* 나머지 상세정보도 출력 */}
<img src={movie.large_cover_image} alt={movie.title} />
<p>{movie.summary}</p>
<h4>Rating: {movie.rating}</h4>
<h4>Runtime: {movie.runtime} minutes</h4>

<h4>장르</h4>
      {movie.genres && (
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      )}

      <Link to='/'>뒤로(목록보기)</Link>
    </div>
    )
}

export default MovieDetail;