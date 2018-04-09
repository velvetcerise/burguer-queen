import React from "react";
import ReactDOM from "react-dom";

export default function MenuItem(props) {
  return (
    <div class="grid_3">
      <div class="banner">
        <div class="gall_block">
          <img src={props.src} alt="" />
          <div class="bann_capt ">
            <div class="maxheight">
              <div class="bann_title">{props.name}</div>
              <div class="bann_title">${props.price}</div>
              <div class="counters">
                <button class="btns">+</button>
                <span>0</span>
                <button class="btns">-</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
