import { faCheck, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'
                        // destructuro las props
export const ItemProducts = ({prod, deleteProd, setProdDone}) => {
  return (
    <ListGroupItem className='d-flex'>
        {prod.detail}
        <span className='ms-auto'>
            {prod.done 
                ? <FontAwesomeIcon icon={faCheck} />        
                : <Button variant="success" onClick={() => setProdDone(prod.id)}>
                  <FontAwesomeIcon icon={faSquareCheck} /> 
                </Button>
            }
            <Button variant='danger' onClick={() => deleteProd(prod.id)}>
              <FontAwesomeIcon icon={faTrash} /> 
            </Button>
        </span>
      </ListGroupItem>
  )
}