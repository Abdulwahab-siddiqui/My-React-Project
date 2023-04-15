import { React, useState } from 'react';
import './Login.css'

function Home(props) {


    const [enteredEmail, setEnteredEmail] = useState('');

    const [enteredPassword, setEnteredPassword] = useState('');

    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value === 'admin' && enteredPassword === 'admin'
        );
    };


    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            event.target.value === 'admin' && enteredEmail === 'admin'
        );
    };


    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);

    };

    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={submitHandler}>
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline" />
                            <input value={enteredEmail}
                                onChange={emailChangeHandler} type="" required />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline" />
                            <input value={enteredPassword}
                                onChange={passwordChangeHandler} type="password" required />
                            <label htmlFor="">Password</label>
                        </div>

                        <button disabled={!formIsValid} type='submit'>Log in</button>

                    </form>
                </div>
            </div>
        </section>

    )
}

export default Home