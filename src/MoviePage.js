import React from 'react';
import styled from 'styled-components';
import Recomendations from './Recomendations';
import { connect } from 'react-redux';
import { getMovieDetails } from './actionsAndReducers';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  max-width: 1100px;
  margin: 50px auto;
  font-family: 'Helvetica', 'Arial';
`;
const H1 = styled.h1`
  margin-top: 0;
  border-bottom: 2px solid black;
  color: darkblue;
  & a {
    font-size: 12px;
    margin-left: 15px;
  }
`;
const Content = styled.div`
  font-style: italic;
  display: flex;
  & h3,
  & p {
    margin: 0;
  }
  & div,
  & button {
    margin: 20px 0 30px 20px;
  }
  & button {
    font-size: 35px;
  }
`;

class MoviePage extends React.Component {
  componentDidMount() {
    this.props.getMovieDetails();
  }
  render() {
    if (Object.getOwnPropertyNames(this.props.movieDetails).length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <Wrapper>
          {/*prettier-ignore*/}
          <H1>{this.props.movieDetails.title}<Link to='/'>(Retour)</Link></H1>
          <Content>
            <aside>
              <img
                src={`https://image.tmdb.org/t/p/w300/${
                  this.props.movieDetails.poster_path
                }`}
                alt={`${this.props.movieDetails.title} poster`}
              />
            </aside>
            <content>
              <div>
                <h3>Resumé:</h3>
                <p>{this.props.movieDetails.overview}</p>
              </div>
              <div>
                <h3>Genre:</h3>
                <p>
                  {this.props.movieDetails.genres
                    .map(genre => genre.name)
                    .join(', ')}
                </p>
                <button>{ class LikeButton extends React.Component {
    state = {
        likes: 0
      };
    render() {
        
        return <button onClick={this.addLike}>Likes: {this.state.likes} </button>
      }
    addLike = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };
    }}</button>
              </div>
              <Recomendations id={this.props.movieDetails.id} />
              
            </content>
          </Content>
        </Wrapper>
      );
    }
  }
}
const mapStateToProps = state => ({
  movieDetails: state.movieDetails
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  getMovieDetails() {
    dispatch(getMovieDetails(ownProps.id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
