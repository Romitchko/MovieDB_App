class LikeButton extends React.Component {
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
    }
    
