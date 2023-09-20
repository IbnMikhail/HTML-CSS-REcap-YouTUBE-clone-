import React from 'react'

const ListTodo = () => {
  return (
    <div>
      <table className="table-auto mt-5 text-center ml-auto mr-auto w-full max-w-sm">
    <thead>
      <tr>
        <th className='px-9'>Todos</th>
        <th><button className='bg-yellow-500 mx-1 flex-shrink-0 hover:bg-yellow-700 hover:border-yellow-700 text-sm border-4 text-white py-3 px-2 rounded'>Edit</button></th>
        <th><button className='bg-red-500 mx-1 flex-shrink-0 hover:bg-red-700 hover:border-red-700 text-sm border-4 text-white py-3 px-2 rounded'>Delete</button></th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr> */}
    </tbody>
  </table>
    </div>
  )
}

export default ListTodo
