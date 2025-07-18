import { useEffect, useState } from "react";


function MovieApp() {
  const [repos, setRepos] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = fetch('https://api.github.com/search/repositories?q=react')
      .then(result => result.json())
      .then(data => {
        setRepos(data.items);
      })
      .catch(err => console.log(err));

    const fetchMovies = fetch('http://yts-proxy.now.sh/list_movies.json')
      .then(result => result.json())
      .then(data => {
        setMovies(data.data.movies);
      })
      .catch(err => console.log(err));

      Promise.all([fetchRepos,fetchMovies])
      .then(()=>setLoading(false));
    
  }, []);

  return(
    <div>
        <h2>Repo</h2>
         <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            {repo.full_name} - <a href={repo.html_url} target="_blank" rel="noreferrer">링크</a>
          </li>
        ))}
      </ul>

      <hr/>

      <h2>영화 제목</h2>
      <ul >
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>영화번호: {movie.id}</h3>
            <h3>영화 제목:{movie.title}</h3>
            <img src={movie.small_cover_image} alt={movie.title}  />
          </li>
        ))}
      </ul>   




    </div>
  )




}

export default MovieApp;