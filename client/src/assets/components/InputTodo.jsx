import { useState } from 'react';

const InputTodo = () => {
  const [task, setTask] = useState("")
  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
        const body = { task }
        const response = await fetch('http://localhost:8000/todos', {
          method : 'POST',
          headers : { 'Content-Type' : 'application/json'},
          body : JSON.stringify(body)
        });

        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
  }
  return (
    <div>
      <h1 className='text-center mt-5'> MY TODO LIST </h1>
      <form className='mt-5 d-flex' onSubmit={ onSubmitForm }>
        <input type='text' className=' py-3 px-9 bg-gray-300 border-red-700' value={task} onChange={ e => setTask(e.target.value)}/>
        <button className='bg-blue-500 mx-1 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-3 px-2 rounded
        '>ADD</button>
      </form>
    </div>
  )
}

export default InputTodo
