import React from 'react'

const InputTodo = () => {
  return (
    <div>
      <h1 className='text-center mt-5'> MY TODO LIST </h1>
      <form className='mt-5 d-flex'>
        <input type='text' className=' py-3 px-9 bg-gray-300 border-red-700 ro'></input><button className='bg-blue-500 mx-1 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-3 px-2 rounded' >ADD</button>
      </form>
    </div>
  )
}

export default InputTodo
