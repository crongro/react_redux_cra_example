import React from 'react';
import './Common.css';

const ListView = ({data, onClick}) => {
    let listHTML = "";
    if(typeof data !== "undefined") {
      listHTML = data.map((v,i) => {
        return (<li onClick={onClick} key={i}>{v}</li>)
      });
    }

    return (<ul>{listHTML}</ul>)
}

export default ListView;
