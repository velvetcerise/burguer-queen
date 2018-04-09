import React from 'react'
import ReactDOM from 'react-dom'
import Menu from "./Menu.js"


function CreateMenu () {
    return   <div><Menu /></div>;
}
alert(':)');

ReactDOM.render(<CreateMenu/>, document.getElementById('react-container'))