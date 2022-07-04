import { ChangeEvent, FormEvent, useState } from "react";
import { Alert, Button, Col, Container, Form, Input, Row } from "reactstrap";
import { createNewTodo } from "../api/todo.api";
import "./CreateTodoForm.css";

export function CreateTodoForm() {
  const [todoTitle, setTodoTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleTodoTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmitClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await createNewTodo({ title: todoTitle });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Container className="form-container">
      <Form>
        <Row>
          <Col className="form-item">
            <Input
              placeholder="Add new todo"
              value={todoTitle}
              onChange={handleTodoTitleChange}
            />
          </Col>
          <Col className="form-item">
            <Button color="primary" type="submit" onClick={handleSubmitClick}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>{showAlert && <Alert color="primary">ToDo created!</Alert>}</Row>
      </Form>
    </Container>
  );
}
