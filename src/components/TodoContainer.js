import React, { useState } from "react";
import TodoItems from './TodoItems';
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { useSelector } from "react-redux";

export default function TodoContainer() {
  const [val, setVal] = useState("");

  const dispatch = useDispatch();
  const todoSelector = useSelector((state) => state.todos.lists);

  const addItem = () => {
    if(!val) {
      alert('Add todo item');
    } else {
      dispatch(addTodo(val));
      setVal('');
    }
  }

  return (
    <>
    <div className="flex align-center mb-8">
    <div className="from-group">
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} className="border-b-2 border-b-orange-500 w-80 pl-3 pr-6 py-2 focus-visible:border-b-2 outline-none hover:active:focus:border-b-green-500" placeholder="Add Item" />
      </div>
      <button onClick={addItem} className="-ml-6">➕</button>
    </div>
      <ul className="w-80">
        {
          todoSelector.map((item) => {
            return <TodoItems key={item.id} item={item} />
          })
        }
      </ul>
    </>
  );
}

