// Importamos la librería de react.
import React from "react";
// Importamos estilos.
import "./App.css";
//Ya no es necesario (hemos sustituido la retahíla de elementos por un array) 
//import Item from "./Item";

// Bootstrap classes: badge, badge-info, text-muted

class ItemList extends React.Component {
  render() {

    //props devuelve un objeto con valores
    console.log(this.props)
    //esto devuelve el array que buscamos
    console.log(this.props.items)
 
    return (
    // devuelve un ul para crear el contenedor de la lista.
      <ul className="item-list">
      {this.props.items.map(function(item) {
        items.defaultProps = {
          description: "sin descripción",
        };
           console.log(item.description);
        //iteramos el array que nos llega, creamos otro con map y le ejecutamos la función por cada item de ese array.
        return <li><div className="item">
        <h5 className="quantity">{item.quantity}</h5>
        <div>
          <h5>{item.name}</h5>
          <h6 className="text-muted">{item.description}</h6>
        </div>
        <div className="badge badge-info">{item.category}</div>
        <h5 className="price">{item.price}€</h5>
      </div></li>
      })}
      </ul>
    )}
}
ItemList.defaultProps = {
  description: "sin descripción",
};
console.log(ItemList.defaultProps)

//¡IMPORTANTE! NO OLVIDAR EXPORTAR LA COSA ESTA.
export default ItemList;
