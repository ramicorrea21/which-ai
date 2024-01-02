import React, {useState, useContext, useEffect} from 'react'


const search = () => {
    const [category, setCategory] = useState({
        cateogry : ""
        })
    const handleChange = (e) =>{
        setCategory({
            [e.target.name] : e.target.value
        })
    }

  return (
    <div className='container-fluid'>
        <form className="d-flex justify-content-center" role="search">
        <input 
        className="form-control me-2 col-sm-2 " 
        type="search" 
        placeholder="Search"
        aria-label="Search"
        name="category"
        value={category.cateogry}
        onChange={handleChange}
         />
      </form>
    </div>
  )
}

export default search
