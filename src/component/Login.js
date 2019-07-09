import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import './Login.css';

class Login extends Component {
    state = {
        username : '',
        password : ''
    }

    handleValue= (evt) =>{
        evt.preventDefault();
        console.log(evt)
        this.setState({
             [evt.target.name]: evt.target.value 
        },()=>{
            console.log(`${this.state.username} ${this.state.password}`)
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.username === 'swap'){
            console.log('logged')
        }
    }
    render() {
        return (
            // <form onSubmit={this.handleSubmit} className='loginAlign'>
            //     <input type='text' name='username' onChange={this.handleValue} required></input><br />
            //     <input type='password' name='password' onChange={this.handleValue} required></input><br />
            //     <button type='submit'>Submit</button><br />
            // </form>
        <MDBContainer >
            <MDBRow >
                <MDBCol md="6">
                <form onSubmit={this.handleSubmit}>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text" >
                    <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="text"
                        name='username'
                        onChange={this.handleValue}
                        error="wrong"
                        success="right"

                    />
                    <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        onChange={this.handleValue}
                        validate
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn type='submit'>Login</MDBBtn>
                    </div>
                </form>
                </MDBCol>
               </MDBRow>
            </MDBContainer>
        );
    }
}

export default Login;