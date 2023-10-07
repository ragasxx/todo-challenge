import React from "react";

const Task = ({ name, description, deleteTask, index,editTask }) => {
  return (
    <div className="flex justify-between ml-[24%] w-1/2 h-20 shadow-lg  mt-10 mb-4">
      <div>
        <p className="text-lg font-serif text-white">{name}</p>
        <p className="text-md font-mono text-white">{description}</p>
      </div>
      <div className="w-36 flex justify-between">
      <button onClick={() => deleteTask(index)} className="text-2xl">
        ❌
      </button>
      <button onClick={() => editTask(index)} className="text-2xl">
        ✏️
      </button>
      </div>
    </div>
  );
};

export default Task;
