'use client'
import apiFilmes from '@/app/apis/ApiFilmes'
import Pagina from '@/app/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'

export default function page(props) {
    const id = props.params.id
    const [filme,setFilme] = useState([])

    useEffect(()=>{
        BuscarFilmes()
    },[])

    async function BuscarFilmes(){
        const resultado = await apiFilmes.get('/movie/' + id +'?language=pt-BR')
        console.log(resultado.data)
        setFilme(resultado.data)
    }
  return (
    <Pagina titulo={filme.title} >
        {filme.id &&(
            <>
             <Row>
                <Col>
                 <CardImg src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                </Col>
                <Col m={6}>
                            <p><b>Orçamento:</b> {filme.revenue} $</p>
                            <p><b>Data de Lançamento:</b> {filme.release_date}</p>
                            <p><b>Duração:</b> {filme.runtime} min</p>
                            <p><b>Nota:</b> {filme.vote_average} ⭐</p>

                            <p><b>Generos:</b></p>
                            <ul>
                                {filme.genres.map(item => {
                                    return <li>{item.name}</li>
                                })}

                            </ul>

                            <p><b>Sinopse:</b> {filme.overview}</p>
                        </Col>
             </Row>
            </>
        )}

    </Pagina>
  )
}
