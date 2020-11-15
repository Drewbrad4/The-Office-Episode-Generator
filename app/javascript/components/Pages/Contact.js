import React, { Component } from "react"
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Contact extends Component {
    render() {
        return (
            <div className="main-box">

                <h4 id="contact-blurb">Please let me know if you have any comments or improvements!</h4>

                <div className="form-box">

                    <h2 id="contact" className="header">Contact Me</h2>

                    <Form className="form" name="contact_form" onSubmit={this.props.onSubmit}>

                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Name:</Label>
                                    <Input type="text" name="name" id="name" placeholder="Name Here" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email:</Label>
                                    <Input type="email" name="email" id="email" placeholder="example@email.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleText">Message:</Label>
                            <Input type="textarea" name="message" id="text" placeholder="I have a job for you!" />
                        </FormGroup>

                        <Button id="contactButton" type="submit">Send</Button>

                    </Form>

                </div>
            </div>
        )
    }
}