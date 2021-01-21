/*eslint-disable*/
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
      currShoe: {},
    };
    this.handleModalView = this.handleModalView.bind(this);
    this.changeColorWay = this.changeColorWay.bind(this);
  }

  componentDidMount() {
    axios.get('/shoes')
      .then((results) => {
        this.setState({ shoes: results.data, currShoe: results.data[0] });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleModalView() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  changeColorWay(i) {
    const { shoes } = this.state;
    this.setState({ currShoe: shoes[i] });
  }

  render() {
    const { shoes, showModal, currShoe } = this.state;
    if (showModal) {
      return (
        <Modal currShoe={currShoe} handleModalView={this.handleModalView} />
      );
    }
    return (
      <div id="frontPage">
        <div className="leftSideContainer">
          <Shoes currShoe={currShoe.media} handleModalView={this.handleModalView} />
        </div>
        <div className="rightSideContainer">
          <RightRail shoes={shoes} currShoe={currShoe} sizes={currShoe.sizes} changeColorWay={this.changeColorWay}/>
        </div>
      </div>
    );
  }
}

export default App;
