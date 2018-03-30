import React, {Component} from 'react';
import {Button, Container, Row, Col, Card, CardBody, Label, Input, Form, FormGroup} from 'reactstrap';
import SocialLoginButtons from './SocialLoginButtons';


class LoginForm extends Component {

	constructor (props) {
	    super(props)

	    this.state = {
	      logged: false,
	      user: {},
	      currentProvider: ''
	    }
	    this.nodes = {}

	    this.onLoginSuccess = this.onLoginSuccess.bind(this)
	    this.onLoginFailure = this.onLoginFailure.bind(this)
	    this.onLogoutSuccess = this.onLogoutSuccess.bind(this)
	    this.onLogoutFailure = this.onLogoutFailure.bind(this)
	    this.logout = this.logout.bind(this)

  	}
  	setNodeRef (provider, node) {
	    if (node) {
	      this.nodes[ provider ] = node
	    }
	}

  onLoginSuccess (user) {
    console.log(user)

    this.setState({
      logged: true,
      currentProvider: user._provider,
      user
    })
  }

  onLoginFailure (err) {
    console.error(err)

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutSuccess () {
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    })
  }

  onLogoutFailure (err) {
    console.error(err)
  }

  logout () {
    const { logged, currentProvider } = this.state

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout()
    }
  }

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
			                            <SocialLoginButtons
									      provider='google'
									      appId='102444846402-te4icsgjqam8ck7m90ig8ujrvj604s19.apps.googleusercontent.com'
									      onLoginSuccess={this.onLoginSuccess}
									      onLoginFailure={this.onLoginFailure}
									    >
									      Login with Google
									    </SocialLoginButtons>
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