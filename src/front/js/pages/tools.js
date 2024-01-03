import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../component/loader'
import { Context } from '../store/appContext'
import { Cards } from '../component/cards'
export const Tools = () => {
  const {store, actions} = useContext(Context)
  const [loading, setLoading] = useState(true)
  const category = useParams()

  const load = () =>{
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }
  useEffect(() =>{
    actions.getMatches(category.category)
    load()
  }, [])


  return (
    <>
      {loading? <Loader/> :
       <div className='text-center container mt-5'>
        <h1 className='mb-5'>{category.category} Tools</h1>
        <div className='tool-cont'>
        {store.tools?.map((tool) =>{
          return(
            <div key={tool.id} >
               <Cards tool={tool} />
            </div>
          )
        })}
        </div>

       </div>
      }
    </>
  )
}


