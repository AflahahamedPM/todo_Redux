import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const ToDoComponent = ({id, handleCheckboxChange, status, title, handleDeleteTodo, handleEditModal, setIsEditing}) => {
  return (
    <div
              className="flex justify-start items-center border-none rounded-lg bg-white py-2 px-2 mb-4"
            >
              <div className="flex justify-between">
                <div className="">
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={status === "Completed"}
                      onChange={() =>
                        handleCheckboxChange(id, status)
                      }
                      className="mr-2 border-none cursor-pointer"
                    />
                    <p className={`${status === "Completed" ? "line-through" : ""} text-lg font-medium uppercase`}>
                      {title}
                    </p>
                  </div>
                  <p className="text-myGray text-xs ml-4">
                    {new Date(id).toLocaleString(undefined, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
                <div className="flex ml-[500px] gap-2 h-10 mt-1">
                  <button
                    className="px-2  rounded-lg bg-myKhaki hover:bg-gray-400"
                    onClick={() => handleDeleteTodo(id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    className="px-2  rounded-lg bg-myKhaki hover:bg-gray-400"
                    onClick={() => {
                        setIsEditing(true)
                      handleEditModal(id);
                    }}
                  >
                    <FontAwesomeIcon icon={faPencil} />
                  </button>
                </div>
              </div>
            </div>
)
}

export default ToDoComponent