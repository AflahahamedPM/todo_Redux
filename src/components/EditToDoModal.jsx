import React from 'react'

const EditToDoModal = ({handleEditTodo, selectedTodo, setSelectedTodo, setShowEditModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[500px] h-[320px] bg-gray-200 rounded-lg p-4">
            <header className="text-xl font-semibold text-myGray mb-4">
              Update TODO
            </header>
            <form onSubmit={(e) => handleEditTodo(e, selectedTodo.id)}>
              <label className="block mb-2 text-myGray" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full p-2 border outline-none mb-4"
                value={selectedTodo.title}
                onChange={(e) => setSelectedTodo({ ...selectedTodo, title: e.target.value })}
              />
              <label className="block mb-2 text-myGray" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full p-2 border outline-none mb-4"
                value={selectedTodo.status}
                onChange={(e) => setSelectedTodo({ ...selectedTodo, status: e.target.value })} 
                >
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
              </select>

              <div className="flex gap-2">
                <button
                  className="mt-4 px-5 py-2 bg-myBlue font-semibold text-white rounded-lg outline-none"
                  type="submit"
                >
                  Update Task
                </button>

                <button
                  className="mt-4 px-4 py-2 bg-myAsh font-semibold rounded-lg text-myGray outline-none"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default EditToDoModal