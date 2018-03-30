import React, {Component} from 'react';
import {Button, Container, Row, Col, Card, CardBody, Label, Input, Form, FormGroup} from 'reactstrap';


class LoginForm extends Component {
	render() {
		return(
			<Container className="py-5">
			    <Row>
			        <Col md="12">
			            <h2 className="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
			            <Row>
			                <div className="col-md-6 mx-auto">
			                    <Card className="rounded-0">
			                        <div className="card-header">
			                            <h3 className="mb-0">Login</h3>
			                        </div>
			                        <CardBody>
			                            <Form id="formLogin">
			                                <FormGroup>
			                                    <Label for="uname1">Username</Label>
			                                    <Input type="text" className="form-control-lg rounded-0" name="uname1" id="uname1" required=""/>
			                                    <div className="invalid-feedback">Oops, you missed this one.</div>
			                                </FormGroup>
			                                <FormGroup>
			                                    <label>Password</label>
			                                    <Input type="password" className="form-control-lg rounded-0" id="pwd1" required="" autoComplete="new-password"/>
			                                    <div className="invalid-feedback">Enter your password too!</div>
			                                </FormGroup>
			                                <div>
			                                    <Label className="custom-control custom-checkbox">
			                                      <Input type="checkbox" className="custom-control-input"/>
			                                      <span className="custom-control-indicator"></span>
			                                      <span className="custom-control-description small text-dark">Remember me on this computer</span>
			                                    </Label>
			                                </div>
			                                <Button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</Button>
			                            </Form>
			                        </CardBody>
			                    </Card>         
			                </div>
			            </Row>          
			        </Col>			        
			    </Row>			    
			</Container>
		);
	}
};

export default LoginForm;