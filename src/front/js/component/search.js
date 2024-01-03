import React, { useState, useContext, useEffect } from 'react'
import { categories } from '../utils/categories'
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'

const search = () => {
  const navigate = useNavigate()
  const {store} = useContext(Context)
  const [category, setCategory] = useState({
    name: ""
  })
  const results = categories.filter((cat) => cat.toLocaleLowerCase().includes(category.name.toLocaleLowerCase()))

  const handleChange = (e) => {
    setCategory({
      [e.target.name]: e.target.value
    })
  }



  const handleClick = (e) =>{
    navigate(`/tools/${e.target.innerText}`)
  }

  return (
    <div className='container-fluid'>
      <form className="d-flex justify-content-center" role="search" autoComplete='off'>
        <input
          className="form-control me-2 col-sm-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="name"
          value={category.name}
          onChange={handleChange}
        />
      </form>
      <div  className='results'>
      {category.name == "" || category.name == " " ? <></> : results.map((res, index) => {
          return (
                <div key={index} className='result' onClick={handleClick}>
                {res}
                </div>
          )
        }
      )}
    </div>
    </div>
  )
}

export default search
