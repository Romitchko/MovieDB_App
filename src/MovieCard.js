import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family:  'Arial', 'Helvetica';
  min-width: 30%;
  max-width: 350px;
  flex-grow: 1;
  margin: 0 5px 20px 5px;
  border: 2px solid black;
  border-radius: 4px;
  text-align: center;
  font-style: bold;
`;
const Image = styled.img`
  border: 0px solid black;
  float: left;
  margin-right: 20px;
`;

const Genre = styled.div`
  &:before {
    content: 'Genre: ';
    font-weight: bold;
    color: #3399ff;
  }
  margin: 30px auto;
`;

const H2 = styled.h2`
  color: darkblue;
  &:visited {
    color: blue;
  }
  text-decoration: none;
`;
const MovieCard = props => {
  const { id, title, genre_ids } = props.movie;
  const imgSrc = `https://image.tmdb.org/t/p/w154/${props.movie.poster_path}`;
  return (
    <Wrapper className="movie-card">
      <Image src={imgSrc} alt={title} />
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <H2>{title}</H2>
      </Link>
      

      <Genre>
        {props.allGenres
          .filter(genre => genre_ids.includes(genre.id))
          .map(genre => genre.name)
          .join(', ')}
      </Genre>
    </Wrapper>
  );
};

export default MovieCard;

