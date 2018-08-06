import React from 'react';
import PropTypes from 'prop-types';

const Card = ({props}) => {
    const {item} = props;

    const getIcons = function(){
        var icons =  item['modes'].map( (type, index) => {
            return <img key={item+type} className='icon' src={`img/${type}-icon.png`}/>
        })
        return icons;
    }

    return (
        <li className="list" key={index}>
            {item['name']}
            {getIcons()}
        </li>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;