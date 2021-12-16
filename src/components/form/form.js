import { useState } from 'react';
import './form.css';
import 'react-telephone-input/css/default.css'
import { ReactTelephoneInput } from 'react-telephone-input'; 
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

export default function Form() {

    // States for registration
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [repeatError, setRepeatError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [value, setValue] = useState()


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        if (!/^[a-zA-Z]*$/g.test(e.target.value)) {
            // alert("only letters allowed")
            setNameError(true);
        } else {
            setName(e.target.value);
            setSubmitted(false);
        }

    };
    const handleSurname = (e) => {
        if (!/^[a-zA-Z]*$/g.test(e.target.value)) {
            // alert("only letters allowed")
            setSurnameError(true)
        } else {
            setSurname(e.target.value);
            setSubmitted(false);
        }

    };

    // Handling the email change
    const handleEmail = (e) => {
        // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
        //     alert('You have entered an invalid email address!')
        // }else{

        // }
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handleTel = (e) => {
        console.log(e)
        // setTel(e.target.value);
        // setSubmitted(false)
    }

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleRepeat = (e) => {
        setRepeat(e.target.value);
        setSubmitted(false)
    }

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
        if (name === '' || email === '' || password === '' || repeat === '' || value === undefined) {
            setError(true);
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                // alert('You have entered an invalid email address!')
                setEmailError(true)
                return
            }
            if (password !== repeat) {
                // alert('error')
                setRepeatError(true);
                return
            }
            setSubmitted(true)
            setError(false)
        }


    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} {surname} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">


            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input onChange={handleName} className="input"
                    value={name} type="text" style={{ border: nameError ? "2px solid red" : '1px solid' }} />
                {nameError ? <div style={{ color: 'red' }}>Enter without numbers</div> : ""}


                <label className="label">Surname</label>
                <input onChange={handleSurname} className="input"
                    value={surname} type="text" style={{ border: surnameError ? "2px solid red" : '1px solid' }} />
                {surnameError ? <div style={{ color: 'red' }}>Enter a valid email</div> : ""}


                <label className="label">Email</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" style={{ border: emailError ? "2px solid red" : '1px solid' }} />
                {emailError ? <div style={{ color: 'red' }}>Enter a valid email</div> : ""}

                <label className="label">Password</label>
                <input onChange={handlePassword} className="input" id="password"
                    value={password} type="password" />

                <label className="label">repeat Password</label>
                <input onChange={handleRepeat} className="input" id="confirm-password"
                    value={repeat} type="password" style={{ border: repeatError ? "2px solid red" : "1px solid" }} />
                {repeatError ? <div style={{ color: 'red' }}>Enter the same password</div> : ""}


                <label className="label">Tel</label>

                {/* <input onChange={handleTel} className="input"
                    value={tel} type="tel"/> */}

<PhoneInput
  placeholder="Enter phone number"
  value={value}
  onChange={setValue}/>
                {/* <ReactTelInput defaultCountry="in"
                    flagsImagePath='/path/to/images/flags.png'
                    onChange={handleTel} className="input"
                    value={tel} /> */}

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}