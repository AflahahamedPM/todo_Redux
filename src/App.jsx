import { useState, useEffect } from "react";
import "./App.css";

import { addTodo, editTodo, deleteTodo, setTodos } from "./utils/todoSlice";
import { openModal, closeModal } from "./utils/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import ToDoComponent from "./components/ToDoComponent";
import NavComponent from "./components/NavComponent";
import ToDoModal from "./components/ToDoModal";

function App() {
  const [status, setStatus] = useState("Incomplete");
  const [selectedTodo, setSelectedTodo] = useState([]);
  const [filterBy, setFilterBy] = useState("All");
  const todos = useSelector((state) => state.todos);
  const [filterTodos, setFilterTodos] = useState(todos);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("")

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch(setTodos(savedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (filterBy === "All") {
      setFilterTodos(todos);
    } else {
      setFilterTodos(todos.filter((todo) => todo.status === filterBy));
    }
  }, [todos, filterBy]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const currentStatus = status;
    const data = {
      title,
      currentStatus,
    };

    dispatch(addTodo(data));
    dispatch(closeModal());
    setStatus("Incomplete");
  };

  const handleEditTodo = (e, id) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const currentStatus = selectedTodo.status;
    const data = {
      id,
      title,
      currentStatus,
    };
    dispatch(editTodo(data));
    dispatch(closeModal());
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditModal = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setSelectedTodo(todoToEdit);
    dispatch(openModal());
    setIsEditing(true);
  };

  const handleCheckboxChange = (id, currentStatus) => {
    const newStatus =
      currentStatus === "Incomplete" ? "Completed" : "Incomplete";

    dispatch(editTodo({ id, currentStatus: newStatus }));
  };

  const filterTodo = (e) => {
    const data = e.target.value;
    setFilterBy(data);
    if (data === "All") {
      setFilterTodos(todos);
    } else {
      const filteredTodo = todos.filter((todo) => todo.status === data);
      setFilterTodos(filteredTodo);
    }
  };
  return (
    <>
      <NavComponent
        setIsEditing={setIsEditing}
        filterBy={filterBy}
        filterTodo={filterTodo}
      />
      <div className="w-6/12 mx-auto mt-4 border-none px-4 pt-4 pb-2 bg-gray-100 rounded-lg">
        {filterTodos.length === 0 ? (
          <p className="px-4 py-3 h-10 bg-myKhaki border-none rounded-lg border w-1/6 mx-auto flex justify-center items-center text-center text-myLighKhaki font-semibold">
            No Todos
          </p>
        ) : (
          filterTodos.map((todo) => (
            <ToDoComponent
              key={todo.id}
              id={todo.id}
              title={todo.title}
              handleCheckboxChange={handleCheckboxChange}
              status={todo.status}
              handleDeleteTodo={handleDeleteTodo}
              handleEditModal={handleEditModal}
              setIsEditing={setIsEditing}
            />
          ))
        )}
      </div>

      {isModalOpen && (
        <ToDoModal
          handleAddTodo={handleAddTodo}
          status={status}
          setStatus={setStatus}
          isEditing={isEditing}
          handleEditTodo={handleEditTodo}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          setTitle={setTitle}
        />
      )}
    </>
  );
}

export default App;
