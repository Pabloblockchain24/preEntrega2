import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({id,nombre,img, precio, stock}) => {
  return (
        <article className="CardItem">
            <header className='Header'>
                <h2 className='ItemHeader'> {nombre}</h2>
            </header>
            <picture className='ItemImg'>
                <img src={img} alt={nombre} className='ImgSize' />
            </picture>
            <section className='section'>
                <p className='Info'>Precio: ${precio}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='buttonDetail'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item