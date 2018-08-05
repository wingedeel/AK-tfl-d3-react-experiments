import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";


class List extends React.Component {
  render() {
    let list = this.props.data.map( (item, index) => {

        // Create a span containing the relevant icons
        const getIcon = function(type){
          return  (
            <img key={item+type} className='icon' src={`img/${type}-icon.png`}/>
          )
        }
        const getIcons = function(modes){
            var icons =  modes.map( (mode, index) => {
                return getIcon(mode);
            })
            return icons;
         } 

          return (
            <button key={index+'blah'} onClick={() => this.props.callback()}>
              <li className="list" key={index}>
                {item['name']}
                <div>{getIcons(item['modes'])}</div>
              </li>
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
