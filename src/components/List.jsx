import React from 'react';
import ReactDOM from 'react-dom';


class List extends React.Component {
  render() {
    
    let list = this.props.data.map( (item, index) => {
          return (
            <li key={index}>{item}</li>
          )
      }
    )

    return (
      <ul>
          {list}
      </ul>
    );
  }
}

export default List;
