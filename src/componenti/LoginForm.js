import React from 'react'
import  './LoginForm.css'

const emailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const formValid = formErrors => {
    let valid = true;
    
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
        
});
return valid;
};


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName:'',
                lastName:'',
                email:'',
                password:''
            }
        };
    }
    handleSubmit = event =>{
        event.preventDefault();
        
        if(formValid(this.state.formErrors)){
            console.log(`
                    --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
            `)
        } else{
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
     };
     handleChange= e => {
         e.preventDefault();
         const {name, value} = e.target;
         let formErrors = this.state.formErrors;
         

        switch(name){
            case 'firstName':
                 formErrors.firstName = 
                 value.length < 3 ? 'minimum 3 characaters required' : '';
                 break;
            case 'lastName':
                 formErrors.lastName = 
                 value.length < 3 ? 'minimum 3 characaters required' : '';
                 break;
            case 'email':
                 formErrors.email = 
                 emailRegex.test(value) ? '' : 'invalid email adsress';
                 break;
            case 'password':
                 formErrors.password = 
                 value.length < 8 ? 'minimum 8 characaters required' : '';
                 break;
                 default:
                     break;
            
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state));
     }
    render() {
        const {formErrors} = this.state;
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h1>Create Account</h1>
                    <form onSubmit={this.handeleSumbit} noValidate>
                        <div className='firstName'>
                            <label htmlFor='firstName'>First Name</label>
                            <input 
                            type='text' 
                            classNamme={formErrors.firstName.length > 0 ? 'error': null} 
                            placeholder='First Name'
                            name='firstName'
                            noValidate
                            onChange={this.handleChange}
                            ></input>
                            {formErrors.firstName.length > 0 && (
                            <span className='errorMessage'>{formErrors.firstName}</span>
                            )}
                        </div>
                        <div className='lastName'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input 
                            type='text' 
                            classNamme={formErrors.lastName.length > 0 ? 'error': null} 
                            placeholder='Last Name'
                            name='lastName'
                            noValidate
                            onChange={this.handleChange}
                            ></input>
                            {formErrors.lastName.length > 0 && (
                            <span className='errorMessage'>{formErrors.lastName}</span>
                            )}
                        </div>
                        <div className='email'>
                            <label htmlFor='email'>Email</label>
                            <input 
                            type='email' 
                            classNamme={formErrors.email.length > 0 ? 'error': null} 
                            placeholder='Email adress'
                            name='email'
                            noValidate
                            onChange={this.handleChange}
                            ></input>
                            {formErrors.email.length > 0 && (
                            <span className='errorMessage'>{formErrors.email}</span>
                            )}
                        </div>
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input 
                            type='password' 
                            classNamme={formErrors.password.length > 0 ? 'error': null} 
                            placeholder='Password'
                            name='password'
                            noValidate
                            onChange={this.handleChange}
                            ></input>
                            {formErrors.password.length > 0 && (
                            <span className='errorMessage'>{formErrors.password}</span>
                            )}
                        </div>
                        <div className='createAccount'>
                            <button  type='submit'>Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>

                </div>

                
            </div>
        )
    }
}
export default LoginForm;
