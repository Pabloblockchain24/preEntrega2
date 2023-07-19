import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,nombre,img,categoria,descripcion,precio,stock}) => {
  return (
        <article className="CardItem">
            <header className='Header'>
                <h2 className='ItemHeader'> {nombre}</h2>
            </header>
            <picture className='ItemImg'>
                <img src={img} alt={nombre} className='ImgSize' />
            </picture>
            <section className='centrar'>
                <p className='Info'>Precio: ${precio}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount inicial={1} stock={10} onAdd={(cantidad) => console.log("Cantidad agregada: ",cantidad)}/>
            </footer>
        </article>



    )
}

export default ItemDetail