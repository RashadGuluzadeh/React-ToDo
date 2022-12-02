import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteTodo, removeTodo } from "../state/actions";

const TodoItem = ({ id, title }) => {
  const { todo } = useSelector((state) => state.data);
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const complete = (checkId) => {
    {
      todo.map((item) => {
        if (checkId === item.id) {
          setCompleted((prevState) => !prevState);
        }
      });
    }
  };
  return (
    <div className="flex  justify-between w-full px-4 ">
      <p
        className={` overflow-hidden truncate inline-block w-full text-left max-w-[318px] border-2 border-black p-2 ${
          completed ? "line-through bg-gray-400" : ""
        }`}
        onClick={() => complete(id)}
      >
        {title}
      </p>
      <button
        className="text-white bg-black shadow border border-black hover:scale-110 hover:duration-300   px-2 text-2xl flex justify-center items-center"
        onClick={() => dispatch(deleteTodo(id))}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
};

export default TodoItem;
