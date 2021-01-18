import React from 'react';
import axios from 'axios';
import Shoes from './Shoes';
import RightRail from './RightSide/RightRail';

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
        <div className="leftSideContainer">
          <Shoes shoes={shoes} />
        </div>
        <div className="rightSideContainer">
          <RightRail />
        </div>
      </div>
    );
  }
}

export default App;
