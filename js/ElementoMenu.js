import React from "react";
import ReactDOM from "react-dom";

export default function MenuItem(props) {
  return(
  <div className="grid_3">
    <div className="banner">
      <div className="gall_block">
        <img src={props.src} alt="" />
        <div className="bann_capt ">
          <div className="maxheight">
            <div className="bann_title">{props.name}</div>
            <div className="bann_title">${props.price}</div>
            <div className="counters">
              <button className="btns">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
