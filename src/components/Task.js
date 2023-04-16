import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsDone, updateTodo } from "../redux/slice";

export default function Task({ task }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateInput, setUpdateInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={`rounded task bg-dark`}>
      <div className="element">
        {/* description */}
        <p className={`fs-3 ${task.isDone && "crossed-out"}`}>
          {task.description}
        </p>
        <div>
          {/* edit btn */}
          <button className="btn btn-dark mx-1" onClick={() => setIsUpdate(true)}>
            edit
          </button>
          {/* isDone btn */}
          <button
            onClick={() => dispatch(setIsDone(task.id))}
            className={`btn ${task.isDone ? "btn-danger" : "btn-dark"}`}
          >
            {`done ${!task.isDone ? "?" : ""}`}
            {task.isDone && <i class="fa-solid fa-check text-success"></i>}
          </button>
        </div>
      </div>
      {/* update form */}
      {isUpdate && (
        <div className="p-1">
          <input
            className="form-control me-2 mb-1"
            onChange={(e) => setUpdateInput(e.target.value)}
            type="text"
            placeholder="update your task ?"
          />
          <button
            className="btn btn-success mx-1"
            onClick={() => {
              if (updateInput.trim() !== "") {
                dispatch(updateTodo({ id: task.id, description: updateInput }));
                setIsUpdate(false);
              }
            }}
          >
            update
          </button>
          <button className="btn btn-danger" onClick={() => setIsUpdate(false)}>
            cancel
          </button>
        </div>
      )}
    </div>
  );
}
