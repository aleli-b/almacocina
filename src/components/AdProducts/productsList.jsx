
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { ItemProducts } from '../../components/itemsProducts/itemProducts'

export const ProductsList = (props) => {
    console.log(props.listProducts)
  return (
    <div>
        <h1>LISTA DE TAREAS</h1>
        Componente que va a pintar la lista de tareas
        TaskList
        <ListGroup>
        
            {
                props.listProducts.map((productsMap, index) => {
                    return (
                        <ItemProducts tarea={productsMap} key={productsMap.id} deleteProd={props.deleteProdAppJs} setProdDone={props.setProdDone}/>
                    )
            })}

        </ListGroup>


    </div>
  )
}