import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Sections = (props) => {
    const navigate = useNavigate()

    const handleClick =(categ) =>{
        navigate(`/tools/${categ}`)
    }
    const category = props.category
    return (
        <div>
                <li className="list-group-item d-flex justify-content-between categ align-items-start text-light bg-dark">
                    <div className="ms-2 me-auto" onClick={() => handleClick(category)}>
                        <div className="fw-bold">{category}</div>
                        Click to see the {category} Tools
                    </div>
                </li>
        </div>
    )
}


