import React from 'react'
import styled from '@emotion/styled'

const Div = styled.div`
    display: grid;
  
    @media(min-width: 500px){
    grid-template-columns: 1fr 1fr;
    align-items:center;
    }
     @media(min-width: 992px){
    grid-template-columns: 1fr 2fr;
    align-items:center;
    text-align:left;
    }
`

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    text-align:center;
    @media(min-width: 500px){
        text-align:left;
    }
`

const Parrafo = styled.p`
      font-size:18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size:24px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display:block;
    max-width:35%;
    margin: 15px auto;
    @media(min-width: 500px){
    margin: auto auto;
    max-width:45%;
    }
    @media(min-width: 992px){
    max-width:80%;}
`


const Resultado = ({cotizacion}) => {
    const {PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
  return (
    <Div>
        <div>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        </div>
        <Contenedor>
         <Precio>Precio: <span>{PRICE}</span> </Precio>
         <Parrafo>Precio más alto del día: <span>{HIGHDAY}</span> </Parrafo>
         <Parrafo>Precio más bajo del día: <span>{LOWDAY}</span> </Parrafo>
         <Parrafo>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span> </Parrafo>
         <Parrafo>Última Actualización: <span>{LASTUPDATE}</span> </Parrafo>
        
        </Contenedor>
        
    </Div>
  )
}

export default Resultado