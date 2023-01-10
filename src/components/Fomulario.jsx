import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Mensaje from './Mensaje'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border:none;
    width:100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        cursor: pointer;
        background-color: #7A7DFE;
    }

`

const Fomulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [alerta, setAlerta] = useState(false)
    const [mensaje, setMensaje] = useState('')

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
    const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos); 

  useEffect(()=>{
    const consultarAPI = async()=>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
       
        let arregloCripto = resultado.Data.map(cripto =>{
         const objCripto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
            return objCripto
        })
        setCriptos(arregloCripto)
    }
    consultarAPI();
  }, [])

   const handleSubmit = (e)=>{
    e.preventDefault();
    if([moneda, criptomoneda].includes('')){
        setAlerta(true)
        setMensaje('Todos los campos son obligatorios');

        setTimeout(() => {
            setAlerta(false)
        }, 2000);
        
    } else {
        setAlerta(false)
        setMonedas({moneda, criptomoneda})
    }
    
  }

  return (
    <form onSubmit={handleSubmit} >
        {alerta && <Mensaje mensaje= {mensaje}/>}

        
        
        <SelectMonedas />
        
        <SelectCriptomonedas />

       <InputSubmit 
            type='submit' 
            value='Cotizar'
        />
    </form>
  )
}

export default Fomulario