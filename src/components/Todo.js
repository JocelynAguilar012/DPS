import React from 'react'

export default function Todo({todo, index, deleteTodo}) {
    return (
        <div>
            <h3>{todo}</h3>
            <button className='btn-delete' onClick={()=>deleteTodo(index)}>x</button>
        </div>
    )
}
