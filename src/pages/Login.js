import React, {useState} from "react";
import {Button, Card, Col, Field, Form, I18Massage, Input, Link, Row, Security} from "../components";
import {SUCCESS_LOGIN_URL} from './ApplicationConfig'
import '../assets/css/sass/login.scss'

const LoginPage = ({history}) => {
    const onLoginSuccess = (token) => {
        history.push(SUCCESS_LOGIN_URL);
    };
    return <div className="container-fluid">
        <Row className='h-100'>
            <Col className="login-form" lg={3} md={3} sm={6} xs={12}>
                <Card>
                    <Row>
                        <div style={{margin: 'auto'}}>
                            <img id='avatar' alt='avatar'/>
                        </div>
                    </Row>
                    <LoginForm onLoginSuccess={onLoginSuccess}/>
                </Card>
            </Col>
        </Row>
    </div>
};
const LOGIN_FORM_RULES = {
    username: 'required',
    password: 'required'
};

const LoginForm = ({onLoginSuccess}) => {
    const [invalidLogin, setInvalidLogin] = useState(null);
    const onLogin = (values) => {
        setInvalidLogin(null);
        Security.loginUser(values.username, values.password)
            .then((token) => {
                onLoginSuccess(token);
            }).catch((err) => {
            console.debug('invalid login error : ', err);
            if (!err.response) {
                setInvalidLogin('err.network_connection');
            } else if (err.response.status === 400) {
                setInvalidLogin('err.invalid_usernameOrPassword');
            } else {
                setInvalidLogin('err.unhandled_error');
            }

        });
    };
    return <React.Fragment>
        <Row>
            <Col className='invalidLoginMessage mt-3'>
                {invalidLogin &&
                <I18Massage code={invalidLogin}/>}
            </Col>
        </Row>
        <Form initialValues={{username: 'admin', password: '1234'}}
              validationRules={LOGIN_FORM_RULES}
              onSubmit={onLogin}>
            <Row>
                <Field className='col-10 offset-1' name="username" label="loginPage.username">
                    <Input/>
                </Field>
            </Row>
            <Row>
                <Field className='col-10 offset-1' name="password" label="loginPage.password">
                    <Input type='password'/>
                </Field>
            </Row>
            <Row className="mb-4">
                <Col className="col-6 offset-1">
                    <Link to='/forgotPassword' title='loginPage.forgotPassword'/>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className='col-10 offset-1'>
                    <Button type='submit'
                            isPrimary={true}
                            title='loginPage.login'
                            className='w-100'/>
                </Col>
            </Row>
        </Form>
    </React.Fragment>
};

export default LoginPage;
