import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, removeTodo } from "../state/actions";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

export const Todos = () => {
  const { todo } = useSelector((state) => state.data);
  const [empty, setEmpty] = useState(true);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    if (todo.length !== 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  });
  const dispatch = useDispatch();
  return (
    <div className="flex items-center text-center justify-center flex-col gap-3">
      {empty && <h3 className="flex justify-center">No ToDo added</h3>}
      {todo.map((item) => {
        return (
          <div className="flex justify-between w-full px-4" key={item.id}>
            <p className="inline-block w-full text-left border-2 border-black p-2">
              {item.title}
            </p>{" "}
            <button
              className="text-white bg-black shadow border border-r-[#525151] border-black hover:scale-110 hover:duration-300   px-2 text-2xl flex justify-center items-center"
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              <BiEdit />
            </button>
            <button
              className="text-white bg-black shadow border border-black hover:scale-110 hover:duration-300   px-2 text-2xl flex justify-center items-center"
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        );
      })}
      {!empty && (
        <div className="flex justify-center">
          <button
            onClick={() => dispatch(removeTodo())}
            className="bg-black text-white p-2 hover:scale-110 hover:duration-300"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};
