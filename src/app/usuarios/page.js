'use client'
import React, { useEffect, useState } from 'react'
import Api from '../apis/ApiUsuario'
import Pagina from '../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'

export default function usuarios() {
    const [usuarios, setUsuarios]=useState([])
    useEffect(()=>{
      BuscarUsuario()
    },[])

    async function BuscarUsuario(){
        const resultado = await Api.get()
        console.log(resultado.data.users)
        setUsuarios(resultado.data.users)

    }
  return (
    <>
    <Pagina>
        <Row md={4} >
           {usuarios.map(usuario=>{
            return(
                <Col className='py-2'>
                   <Card>
                     <Card.Img src={usuario.image} /> 
                     <Card.Body>
                      <Card.Title>{usuario.firstName} {usuario.lastName} </Card.Title>
                      <p><b>Idade: </b>{usuario.age} </p>
                     </Card.Body>
                   </Card> 
                </Col>
            )
           })} 
        </Row>
    </Pagina>
    </>
  )
}
