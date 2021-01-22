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
      selectedSize: '',
      selectedStock: '',
      addButtonClicked: false,
      favorited: currShoe.favorite,
    };
    this.handleModalView = this.handleModalView.bind(this);
    this.changeColorWay = this.changeColorWay.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.onAddButton = this.onAddButton.bind(this);
    this.onFavoriteButton = this.onFavoriteButton.bind(this);
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
    const { shoes, currShoe} = this.state;
    if (currShoe !== shoes[i]) {
      this.setState({ currShoe: shoes[i], selectedSize: '', selectedStock: '', addButtonClicked: false });
    }
  }

  selectSize(i) {
    e.preventDefault();
    const { currShoe, addButtonClicked } = this.state;
    this.setState({ selectedSize: currShoe.sizes[i], selectedStock: currShoe.stock[i], addButtonClicked: false })
  }

  onAddButton(e) {
    e.preventDefault();
    const { addButtonClicked } = this.state;
    this.setState({ addButtonClicked: true })
  }

  onFavoriteButton(e) {
    e.preventDefault();
    const { currShoe, favorited } = this.state;
    this.setState({ favorited: !currShoe.favorite }, () => {
      currShoe.favorite = favorited;
    })
  }

  render() {
    const { shoes, showModal, currShoe, selectedSize, selectedStock, addButtonClicked, favorited } = this.state;
    if (showModal) {
      return (
        <Modal currShoe={currShoe} handleModalView={this.handleModalView} />
      );
    }
    return (
      <div id="frontPage">
        <div className="leftSideContainer css-l8ohx9">
          <Shoes currShoe={currShoe.media} handleModalView={this.handleModalView} />
        </div>
        <div className="rightSideContainer">
          <RightRail shoes={shoes} currShoe={currShoe} sizes={currShoe.sizes} stock={currShoe.stock} changeColorWay={this.changeColorWay} selectSize={this.selectSize} selectedSize={selectedSize} selectedStock={selectedStock} onAddButton={this.onAddButton} addButtonClicked={addButtonClicked} favorited={favorited} onFavoriteButton={this.onFavoriteButton}/>
        </div>
      </div>
    );
  }
}

export default App;
