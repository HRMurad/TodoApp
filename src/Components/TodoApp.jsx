import React, { useState } from "react";
import "../assets/Custom.css";
import "../assets/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

const Try = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const onchangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const addTask = () => {
    if (inputText.trim() !== "") {
      let newTask = { inputText };
      setTodos([...todos, newTask]);
      setInputText("");
    }
  };

  const onClickDelete = (i) => {
    let updateTodo = [...todos];
    updateTodo.splice(i, 1);
    setTodos(updateTodo);
  };

  const keyDown = (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  };
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col>
            <div className="wrappingContainer">
              <div className="mainContainer">
                <h1>Todo App</h1>
                <div className="inputContainer">
                  <input
                    className="inputText"
                    type="text"
                    placeholder="write me"
                    onChange={onchangeHandler}
                    value={inputText}
                    onKeyDown={keyDown}
                  />
                  <button className="addBtn btn btn-danger" onClick={addTask}>
                    Add
                  </button>
                </div>
                <h1>Result</h1>
                <hr />

                <div className="outputContainer">
                  {todos.map((list, i) => (
                    <div key={i}>
                      <div className="output"> {list.inputText} </div>
                      <button
                        className="deleteBtn btn btn-primary"
                        onClick={() => onClickDelete(i)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Try;
