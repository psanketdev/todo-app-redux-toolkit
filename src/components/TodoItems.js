import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";


export default function TodoItems(props) {
  const { text, id } = props.item;
  const removeDispatch = useDispatch();

  return (
    <li className="flex justify-between bg-gray-100 drop-shadow-md py-2 px-5 border-b-2 border-b-indigo-700">
      <h2 className="font-medium">{text}</h2>
      <button onClick={() => removeDispatch(removeTodo(id))} className="text-red-300">🗑️</button>
    </li>
  );
}
