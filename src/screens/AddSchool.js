import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

const AddSchool = () => {
  
  const handleSubmit = (event) => {
      event.preventfault();
      fetch(process.env.React_APP_API, {
          method:'POST',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              SchoolId:null,
              SchoolImage:event.target.SchoolImage.value 
          })
      })
      .then(res=>res.json())
      .then((result)=>{
          alert(result);   
      },
     (error)=>{
         alert('Failed');
     })
  }
  constructor=(props)=>{
 
    this.handleSubmit=this.handleSubmit(this);  
    }
  
  return (
    <>
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.header>
            <Modal.Title id="contained-modal-title-vcenter">
              AddSchool
            </Modal.Title>
          </Modal.header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="SchoolName">
                    <Form.Label>SchoolImage</Form.Label>
                    <Form.Control
                      type="image"
                      name="SchoolImage"
                      required
                      placeholder="SchoolImage"
                    />

                    <Form.Label>SchoolName</Form.Label>
                    <Form.Control
                      type="text"
                      name="SchoolName"
                      required
                      placeholder="SchoolName"
                    />

                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="Description"
                      required
                      placeholder="Description"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit">
                      AddSchool
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AddSchool;
