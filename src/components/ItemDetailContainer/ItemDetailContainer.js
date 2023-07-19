import React from 'react'
import {useState, useEffect} from 'react'
import { getProductoById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [producto,setProducto] = useState(null)
  const {itemId} = useParams()

    useEffect(() => {
      getProductoById(itemId)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])


    return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer