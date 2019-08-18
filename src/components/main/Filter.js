import React from 'react';

const Filter = (props) => (
  <div className="filter">
    <p>
        Search :
      <input
        onChange={props.queryChange}
        data-element="query-field"
      />
    </p>
    <p>
        Sort by :
      <select
        data-element="order-field"
        onChange={
            props.orderChange
          }
      >
        <option value="name">Alphabetical</option>
        <option value="age">Newest</option>
      </select>
    </p>
  </div>
);

export default Filter;
