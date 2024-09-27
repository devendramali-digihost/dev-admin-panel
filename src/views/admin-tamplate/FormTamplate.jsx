import React from 'react'
import Select from 'react-select'
import { Row, Col, Card, Form, Button , InputGroup,FormControl} from 'react-bootstrap';

const FormTamplate = () => {
    const options = [
		{ value: 'Number', label: 'Number' },
		{ value: 'Text', label: 'Text' },
		{ value: 'Password', label: 'Password' }
	];
  return (
    <>
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>Text</Form.Label>
                                        <Form.Control type="text" placeholder='Input'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder='Email'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder='Password'></Form.Control>
                                    </Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <FormControl aria-label="Text input with checkbox" />
                                    </InputGroup>
                                    
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3 ">
                                        <Form.Label className="mb-0">Email:</Form.Label>
                                        <Form.Control className="" plaintext readOnly defaultValue="email@example.com" />
                                    </Form.Group>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </InputGroup>
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='PageName'>
                                        <Form.Label>File Input</Form.Label>
                                        <Form.Control type="file" placeholder='Page Name'></Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                        <Form.Label>Select Dropdown</Form.Label>
                                        {/* <Form.Select aria-label="type">
                                            <option value="Number">Number</option>
                                            <option value="Text">Text</option>
                                            <option value="Password">Password</option>
                                            <option value="Email">Email</option>
                                        </Form.Select> */}
                                        <Select options={options} />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Checkbox Button</Form.Label>
                                        <div>
                                        <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="checkbox"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type="checkbox"
                                        />
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Radio Button</Form.Label>
                                       <div>
                                       <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="radio"
                                        />
                                        <Form.Check
                                            inline
                                            label="2"
                                            name="group1"
                                            type="radio"
                                        />
                                       </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                    <Form.Label>Switch Button</Form.Label>
                                       <div>
                                       <Form.Check
                                            inline
                                            label="1"
                                            name="group1"
                                            type="switch"
                                        />
                                       </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group className="mb-3" controlId='Type'>
                                        <Form.Label>Range</Form.Label>
                                        <Form.Range />
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                <Form.Group className="mb-3" controlId='PageName'>
                                    <Form.Label>Text Area</Form.Label>
                                    <Form.Control  as="textarea" rows={3} placeholder='Text Area' ></Form.Control>
                                </Form.Group>
                            </Col>
                                <Col lg={12}>
                                <div className="text-start">
                                    <Button type="submit" variant="primary">
                                        Submit
                                    </Button>
                                </div>
                            </Col>
                           
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default FormTamplate