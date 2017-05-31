import React from 'react';

const CompleteListView = ({completeList}) => {
    console.log('completeList is ', completeList);
    let listHTML = "";
    if(typeof completeList !== "undefined") {
    	console.log('completeList is ', completeList);
      listHTML = completeList.map((v,i) => {
        return (<li key={i}>{v}</li>)
      });
    }

    return (<div>
    	<h2>completeList~</h2>
    	<ul>{listHTML}</ul>
    	</div>
    	)
}

export default CompleteListView;
