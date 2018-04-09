import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./ElementoMenu.js";

export default function Menu() {
  return (
    <div>
      <div id="menu">
        <h3 className="subtitle">Desayunos</h3>
        <MenuItem src="images/sand.jpg" name="Sandwich" price="10" />
        <MenuItem src="images/juive.jpg" name="Jugo de Naranja" price="7" />
        <MenuItem src="images/ca.jpg" name="Café americano" price="5" />
        <MenuItem src="images/descarga.jpg" name="Café leche" price="7" />
        <div className="clear" />
        <br />
        <h3 className="subtitle">Comidas</h3>
        <MenuItem src="images/h4.jpg" name="Hamburgesa simple" price="10" />
        <MenuItem src="images/h5.jpg" name="Hamburgesa doble" price="15" />
        <MenuItem src="images/ff.jpg" name="Papas fritas" price="5" />
        <MenuItem src="images/onion.jpg" name="Aros de cebolla" price="5" />
        <div className="clear" />
        <MenuItem src="images/water.jpg" name="Vaso de agua" price="8" />
        <MenuItem src="images/soda.jpg" name="Soda de la casa" price="10" />
      </div>
    </div>
  );
}
