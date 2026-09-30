import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row, Button, FormGroup ,Form} from 'reactstrap';

const Login=()=>{
    return(
        <>
        <div className="login-page">
            <Container>
                <Row className="justify-content-center align-items-center" >
                    <Col xs="12" sm="10" md="6" lg="4">
                    <div className='login-box'>
                        <h2 className='text-center'> Login page </h2>
                        <Form>
                            <FormGroup>
                                <label for="email"> Email Address </label>
                                <input type='email' placeholder='Enter your email' className='form-control'></input>
                            </FormGroup>

                             <FormGroup>
                                <label for="password"> Password </label>
                                <input type='password' placeholder='Enter your password' className='form-control'></input>
                            </FormGroup>

                            <div className='d-flex justify-content-between align-items-center mb4'>
                            <FormGroup>
                              <input type='checkbox' className=''/> 
                              <label> Remember me </label>
                            </FormGroup>
                            <a href='#'>Forget password </a>
                            </div>

                            <Button color='primary' type='submit' className='w-100'>sign In </Button>
                        </Form>
                        <div className='text-center mt-4'>
                            <span className='text-muted'> Don't have account ? </span>
                            <a href='#' className='textdecotation-none fw-bold' > Sign up </a>


                        </div>

                    </div>
                    
                    </Col>
                </Row>
            </Container>

        </div>
        
        </>
    )
}

export default Login;