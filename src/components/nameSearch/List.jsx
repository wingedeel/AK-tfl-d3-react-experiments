import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from './Card';

class List extends React.Component {
  render() {
    let list = this.props.data.map( (item, index) => {
  
        // const getIcons = function(){
        //     var icons =  item['modes'].map( (type, index) => {
        //         return <img key={item+type} className='icon' src={`img/${type}-icon.png`}/>
        //     })
        //     return icons;
        //  } 

          return (
            <button key={index+'list-item'} onClick={() => this.props.callback()}>
            {
              /**
              <li className="list" key={index}>
                {item['name']}
               {getIcons()}
              </li>
              **/
            }
              <Card item={item}/>
            </button>
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
