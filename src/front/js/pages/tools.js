import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../component/loader'
import { Context } from '../store/appContext'
export const Tools = () => {
  const {store, actions} = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [matches, setMatches] = useState([])
  const category = useParams()

  const load = () =>{
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }

  const matchTools = (category) =>{
      setTimeout(() =>{
      setMatches(store.tools?.filter((tool) => tool.category == category))
      }, 1000)
  }

  useEffect(() =>{
    actions.fetchTools()
    matchTools(category.category)
    load()

  }, [])


  return (
    <>
      {loading? <Loader/> :
       <div className='text-center container mt-5'>
        <h1>{category.category} Tools</h1>
       </div>
      }
    </>
  )
}


