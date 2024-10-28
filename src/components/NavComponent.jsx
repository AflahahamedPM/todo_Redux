import React from 'react'
import { openModal } from '../utils/modalSlice'
import { useDispatch } from 'react-redux'

const NavComponent = ({ setShowModal, filterBy, filterTodo, setIsEditing }) => {
    const dispatch = useDispatch()
  return (
    <>
    <h1 className="text-myGray text-4xl font-bold my-10 flex justify-center">
        TODO LIST
      </h1>
      <div className="w-6/12 mx-auto flex justify-between">
        <button
          className="px-5 h-11 bg-myBlue rounded-lg text-white text-"
          onClick={() => {
            setIsEditing(false)
            dispatch(openModal())
          }}
        >
          Add Task
        </button>
        <select
          id="status"
          name="status"
          className="w-44 p-2 cursor-pointer border outline-none mb-4 px-6 py-2 text-lg bg-myAsh rounded-lg text-myBrown "
          value={filterBy}
          onChange={(e) => filterTodo(e)}
        >
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      </>
  )
}

export default NavComponent