import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddTodos(props) {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (title !== "" && detail !== "") {
      props.addTodo(title, detail, status);
      history.push('/todos');
    }
    else {
      alert("Title and detail cannot be empty!");
    }
  }

  return (
    <div className="container mt-3">
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">Enter your title.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Detail</label>
          <textarea className="form-control" value={detail} onChange={(e)=>{setDetail(e.target.value)}}></textarea>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" value={status} onChange={(e)=>{setStatus(e.target.checked)}} id="exampleCheck1"/>
          <label className="form-check-label" htmlfor="exampleCheck1">Complete</label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddTodos;
