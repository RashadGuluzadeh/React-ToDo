import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../state/actions";
import { Todos } from './Todos'
import { RiMenuAddLine } from "react-icons/ri";

const Form = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if(value === ""){
      setDisabled(true)
    }else{
      setDisabled(false);
    }
  })
  return (
    <>
    <form onSubmit={handleSubmit} className="p-4 flex relative">
      <h1 className="absolute top-[-35px] left-32 px-2 bg-white text-3xl text font-bold">To Do list</h1>
      <input
        type="text"
        className="border-2 border-black w-80 p-2 outline-none"
        placeholder="Add Items..."
        value={value}
        onChange={handleChange}
      />
      <button className="bg-black text-white hover:scale-110 hover:duration-300 p-2 text-2xl items-center" type="submit" disabled={disabled} onClick={() => dispatch(addTodo(value), setValue(''))}>
        <RiMenuAddLine />
      </button>
      </form>
      <Todos />
      </>
    
  );
};

export default Form;
