import React, { useState } from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../helper/addSlice";

const Body = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const dispatch = useDispatch();
  const task = useSelector((store) => store.add.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ name, description }));
  };

  const deleteTask = (index) => {
    dispatch(removeTodo(index));
  };

  const editTask = (index) =>{
    
  }

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-800 flex flex-col">
      <div className="ml-[25%] w-1/2 px-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-6 mt-48">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name of the task
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="coffee"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              placeholder="get a coffee"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex-grow flex flex-col">
        {task.map(({ name, description }, index) => (
          <Task
            key={index}
            name={name}
            description={description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
