'use client'
import React, { useEffect, useState } from 'react'
import apiFilmes from '../apis/ApiFilmes'
import Pagina from '../components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'


export default function page() {
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        BuscarFilmes()
    },[])

    async function BuscarFilmes(){
        const resultado = await apiFilmes.get('/movie/popular?language=pt-BR')
        console.log(resultado.data.results)
        setFilmes(resultado.data.results)


    }
  return (
    <Pagina titulo='Filmes Populares' >
      <Row md={4}>
         {filmes.map(filme=>{
            return(
                <Col className='py-2'>
                  <Card>
                    <Card.Img src={'https://image.tmdb.org/t/p/w500/'+ filme.poster_path} />
                    <Card.Body>
                        <Card.Title>{filme.title} </Card.Title>
                        <p><b>Nota: {filme.vote_average} </b></p>
                    </Card.Body>
                    <Card.Footer className='text-end'>
                        <Button href={'/filmes/' + filme.id} >Detalhes:</Button>
                    </Card.Footer>
                  </Card>
                </Col>
            )
         })}
      </Row>
    </Pagina>
  )
}
