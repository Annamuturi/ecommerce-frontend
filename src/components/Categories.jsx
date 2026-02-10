import React from 'react'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()


  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>Categories</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 
        xl:grid-cols-7 mt-6 gap-6 sm:px-4 px-4 py-4'>

        {categories.map((categories, index)=>(
        <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col 
        justify-center items-center' 
        style={{backgroundColor: categories.bgColor}}
        onClick={()=>{navigate(`/products/${categories.path.toLowerCase()}`); {/* This line uses a Maps function (commonly from a routing library like React Router) to programmatically change the URL.*/}
        {/*It constructs the new URL using a template literal: /products/ followed by the lowercase version of categories.path. For example, if categories.path is "Electronics", the URL will become /products/electronics. */}
        scrollTo(0,0) ;{/*This standard browser function scrolls the window to the top-left corner of the page. The first 0 represents the x-coordinate (horizontal scroll), and the second 0 represents the y-coordinate (vertical scroll). */}
    }}
        >
            <img src={categories.image} alt="" 
            className='group-hover:scale-108 transilation max-w-28'
            />
            <p className='text-sm font-medium'>{categories.text}</p>
        </div>
        ))
        }
        </div>
    </div>
  )
}

export default Categories