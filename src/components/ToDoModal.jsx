import React from 'react';
import { closeModal } from '../utils/modalSlice';
import { useDispatch } from 'react-redux';

const ToDoModal = ({
  handleAddTodo,
  handleEditTodo,
  status,
  setStatus,
  isEditing,
  selectedTodo,
  setSelectedTodo,
  setTitle
}) => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      handleEditTodo(e, selectedTodo.id);
    } else {
      handleAddTodo(e);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="w-[500px] h-[320px] bg-gray-200 rounded-lg p-4">
        <header className="text-xl font-semibold text-myGray mb-4">
          {isEditing ? 'Edit TODO' : 'Add TODO'}
        </header>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-myGray" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={isEditing ? selectedTodo.title : undefined}
            onChange={(e) => {
              if (isEditing) {
                setSelectedTodo({ ...selectedTodo, title: e.target.value });
              } else {
                setTitle(e.target.value);
              }
            }}
            className="w-full p-2 border outline-none mb-4"
            required
          />
          <label className="block mb-2 text-myGray" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full p-2 border outline-none mb-4"
            value={isEditing ? selectedTodo.status : status}
            onChange={(e) => {
              if (isEditing) {
                setSelectedTodo({ ...selectedTodo, status: e.target.value });
              } else {
                setStatus(e.target.value);
              }
            }}
          >
            <option value="Incomplete">Incomplete</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex gap-2">
            <button
              className="mt-4 px-5 py-2 bg-myBlue font-semibold text-white rounded-lg outline-none"
              type="submit"
            >
              {isEditing ? 'Update Task' : 'Add Task'}
            </button>

            <button
              className="mt-4 px-4 py-2 bg-myAsh font-semibold rounded-lg text-myGray outline-none"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoModal;
