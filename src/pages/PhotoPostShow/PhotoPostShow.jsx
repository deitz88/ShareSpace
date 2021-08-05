import React from 'react'
import { useParams} from 'react-router-dom'

export default function PhotoPostShow({user}){
    const { id } = useParams();
    console.log(id)
    return(
    <h1>post show page!</h1>
    )
}