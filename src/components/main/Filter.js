import React from 'react';

const Filter = (props) => (
    <div className="filter">
      <p>
        Search : 
        <input 
          data-element="query-field" 
          onChange={props.queryChange}
          ></input>
      </p>
      <p>
        Sort by : 
        <select 
          data-element="order-field"
          onChange = {
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