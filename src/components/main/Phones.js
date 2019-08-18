import React from 'react';

function Phone(props) {
  const {
    id, name, image, snippet, onLinkClicked, onAddClick,
  } = props;
  return (
    <li
      className="phone"
      data-element="phone-element"
      data-phone-id={id}
    >
      <div className="phones__links">
        <a
          onClick={onLinkClicked}
          href={`#!/phones/${name}`}
          className="thumb"
          data-element="details-link"
        >
          <img alt={name} src={image} />
        </a>
        <div className="phones__info">
          <a
            onClick={onLinkClicked}
            href={`#!/phones/${name}`}
            data-element="details-link"
          >
            {name}
          </a>
          <p className="snippet">{snippet}</p>
        </div>
      </div>
      <div className="phones__btn-buy-wrapper">
        <button
          className="btn btn-success"
          data-element="add-to-cart"
          onClick={onAddClick}
        >
          Add
        </button>
      </div>
    </li>
  );
}

export default Phone;
