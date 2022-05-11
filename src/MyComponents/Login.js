import React from 'react'
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <center>
      <Form>
        <Form.Group className="mb-3" controlId="FormBasicEmail">
        <Form.Label>Email address </Form.Label>
        <Form.Control type="email" placeholder="Enter email" /><br></br>
        </Form.Group><br></br>

        <Form.Group className="mb-3" controlId="FormBasicPassword">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group><br></br>
        <Button variant="primary" type="submit">
           Submit
        </Button>
      </Form>
      </center>

    </div>
  )
}
