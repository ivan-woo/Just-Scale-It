import React from 'react';
import axios from 'axios';
import Shoes from './Shoes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
    };
  }

  componentDidMount() {
    axios.get('/shoes')
      .then((results) => {
        this.setState({ shoes: results.data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { shoes } = this.state;
    return (
      <div id="frontPage">
        <div className="container">
          <Shoes shoes={shoes} />
        </div>
        <div className="container2" />
      </div>
    );
  }
}

export default App;
