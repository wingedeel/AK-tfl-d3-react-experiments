import React from 'react';
import ReactDOM from 'react-dom';


class List extends React.Component {
  render() {
    console.log('List data ', this.props);
    let list = this.props.data.map( (item, index) => {

        // Create a span containing the relevant icons
        const getIcon = function(type){
          return  (
            <img key={item+type} className='icon' src={`img/${type}-icon.png`}/>
          )
        }
        const getIcons = function(modes){
            var icons =  modes.map( (mode, index) => {
              console.log('mode ', mode);
                return getIcon(mode);
            })
            return icons;
         }

          return (
            <li key={index}>
              <span>
                {getIcons(item['modes'])}
              </span>
              {item['name']}
            </li>
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
