import { useState, useEffect } from "react";
import { getProductos , getProductoByCategoria } from "../../asyncMock";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer =() => {
  const [productos,setProductos] =useState([])
  const [mostrar,setMostrar] =useState("")
  const {categoriaId} = useParams()



  useEffect(() => {
      const asyncFunc = categoriaId ? getProductoByCategoria : getProductos
      categoriaId ? setMostrar(categoriaId) : setMostrar("TODOS LOS PRODUCTOS")
      asyncFunc(categoriaId)
        .then(response => {
          setProductos(response)
        })
        .catch(error => {
          console.error(error)
        })
  },[categoriaId])

  return(
    <>
      <h2 className="personalizarPage">{mostrar}</h2>
        <ItemList productos={productos} />
    </>
  ) 
}
export default ItemListContainer;
