import React from 'react'

const AddTodoModal = ({handleAddTodo, status, setStatus, setShowModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="w-[500px] h-[320px] bg-gray-200 rounded-lg p-4">
            <header className="text-xl font-semibold text-myGray mb-4">
              Add TODO
            </header>
            <form onSubmit={(e) => handleAddTodo(e)}>
              <label className="block mb-2 text-myGray" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full p-2 border outline-none mb-4"
              />
              <label className="block mb-2 text-myGray" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="w-full p-2 border outline-none mb-4"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
              </select>

              <div className="flex gap-2">
                <button
                  className="mt-4 px-5 py-2 bg-myBlue font-semibold text-white rounded-lg outline-none"
                  type="submit"
                >
                  Add Task
                </button>

                <button
                  className="mt-4 px-4 py-2 bg-myAsh font-semibold rounded-lg text-myGray outline-none"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
)
}

export default AddTodoModal