import React from 'react';
import PhonesService from '../services';

class Viewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: {
        id: '',
        images: [],
        name: '',
        description: '',
      },
      mainImage: '',
    };
  }

  componentDidMount() {
    const { id } = this.props;
    if (id) {
      PhonesService.getById(id).then((data) => {
        this.setState({
          phone: data,
          mainImage: data.images[0],
        });
      });
    }
  }

  selectImage(imageUrl) {
    this.setState({
      mainImage: imageUrl,
    });
  }

  renderImgs() {
    const { phone, phoneId } = this.state;
    return (
      phone.images.map((img) => (
        <li key={img}>
          <img
            src={img}
            alt="main"
            data-element="small-preview"
            key={`img${phoneId}`}
            onClick={() => {
              this.selectImage(img);
            }}
          />
        </li>
      )));
  }

  render() {
    const { mainImage, phone } = this.state;
    const { id, name, description } = phone;
    const { onBackClicked, onAddClicked } = this.props;
    return (
      <div className="phoneViewer">
        <div className="phoneViewer_info">
          <img
            alt={name}
            className="phoneDetail mainImage"
            src={mainImage}
            data-element="big-preview"
          />
          <div className="phone_info">
            <div
              data-element="phone-element"
              data-phone-id={id}
              className="buttons"
            >
              <a
                href="#"
                className="btn"
                data-element="back-button"
                onClick={onBackClicked}
              >
                Back
              </a>
              <button
                className="btn"
                data-element="add-to-cart"
                onClick={() => {
                  onAddClicked(name);
                }}
              >
                Add to basket
              </button>
            </div>
            <div className="phoneDetail">
              <h1>{name}</h1>
              <p className="phoneViewer__description">{description}</p>
            </div>
          </div>
        </div>
        <div className="phone-thumbs-block">
          <ul className="phone-thumbs">
            {this.renderImgs()}
          </ul>
        </div>
      </div>
    );
  }
}


export default Viewer;
