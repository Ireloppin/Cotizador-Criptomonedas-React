import React from 'react'
import styled from '@emotion/styled'

const Alerta = styled.div`
    background-color: #B7322C;
    color:#fff;
    padding: 2rem;
    font-family: 'Lato', sans-serif;
    font-weight:700;
    font-size: 18px;
    text-align:center;
`


const Mensaje = ({mensaje}) => {
  return (
    <div>
        <Alerta>{mensaje}</Alerta>
        
    </div>
  )
}

export default Mensaje