import React from 'react';
import axios from 'axios';
import Shoes from './Shoes';
import RightRail from './RightSide/RightRail';
import Modal from './Modal';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      showModal: false,
    };
    this.handleModalView = this.handleModalView.bind(this);
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

  handleModalView() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { shoes, showModal } = this.state;
    if (showModal) {
      return (
        <Modal shoes={shoes} handleModalView={this.handleModalView} />
      );
    }
    return (
      <div id="frontPage">
        <div className="leftSideContainer">
          <Shoes shoes={shoes} handleModalView={this.handleModalView} />
        </div>
        <div className="rightSideContainer">
          <RightRail />
        </div>
      </div>
    );
  }
}

export default App;
