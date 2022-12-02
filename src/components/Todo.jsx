import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, removeTodo } from "../state/actions";
import { BiEdit } from "react-icons/bi";
import TodoItem from "./TodoItem";

export const Todo = () => {
  const { todo } = useSelector((state) => state.data);
  const [empty, setEmpty] = useState(true);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (todo.length !== 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    if (todo.length > 3) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`flex items-center text-center justify-center flex-col gap-3 max-h-[168px] overflow-hidden ${
          scroll ? "overflow-y-scroll overflow-x-hidden" : null
        } `}
      >
        {empty && <h3 className="flex justify-center">No ToDo added</h3>}
        {todo.map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })}
      </div>
      {!empty && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => dispatch(removeTodo())}
            className="bg-black text-white p-2 hover:scale-110 hover:duration-300"
          >
            Remove All
          </button>
        </div>
      )}
    </>
  );
};
