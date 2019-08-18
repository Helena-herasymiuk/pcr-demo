import React from 'react';
import Cart from './main/Cart';
import Filter from './main/Filter';
import Viewer from './main/Viewer';
import Catalog from './main/Catalog';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: {
        order: 'name',
        query: '',
      },
      phoneSelected: null,
      phoneAdded: {},
    };

    this.addItem = (phone) => {
      const { phoneAdded } = this.state;
      let i = phoneAdded[phone];
      if (!phoneAdded.hasOwnProperty(phone)) {
        i = 0;
      }
      i += 1;
      this.setState({
        phoneAdded: {
          ...phoneAdded,
          [phone]: i,
        },
      });
    };

    this.queryChange = this.queryChange.bind(this);
    this.orderChange = this.orderChange.bind(this);

    this.removeItem = (phone) => {
      const { phoneAdded } = this.state;
      let i = phoneAdded[phone];
      i -= 1;
      if (phoneAdded.hasOwnProperty(phone)) {
        this.setState({
          phoneAdded: {
            ...phoneAdded,
            [phone]: i,
          },
        });
      }
      if (i === 0) {
        delete phoneAdded[phone];
        this.setState(this.state);
      }
    };
  }

  queryChange(event) {
    this.setState({
      filter: {
        ...this.state.filter,
        query: event.target.value,
      },
    });
  }

  orderChange(event) {
    this.setState({
      filter: {
        ...this.state.filter,
        order: event.target.value,
      },
    });
  }

  handleClick = (id) => {
    this.setState({
      phoneSelected: id,
    });
  }

  handleBackClick = () => {
    this.setState({
      phoneSelected: '',
    });
  }

  render() {
    const { phoneAdded, phoneSelected, filter } = this.state;
    return (
      <main>
        <Cart
          name={phoneAdded}
          onDeletePhone={this.removeItem}
        />
        {phoneSelected
          ? (
            <Viewer
              id={phoneSelected}
              onBackClicked={this.handleBackClick}
              onAddClicked={this.addItem}
            />
          ) : (
            <>
              <Filter
                queryChange={this.queryChange}
                orderChange={this.orderChange}
              />
              <Catalog
                onPhoneClicked={this.handleClick}
                onAddClicked={this.addItem}
                filter={filter}
              />
            </>
          )}
      </main>
    );
  }
}

export default Main;
