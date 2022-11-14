import React, { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom'; 
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components'; 
import * as ROUTES from '../constants/routes'; 

export default function Signin() {
    const history = useHistory(); 
    const { firebase } = useContext(FirebaseContext); 
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        // firebase work here
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                // push to the browse page
                history(ROUTES.BROWSE); 
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }; 

    return (
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                     />
                     <Form.Input
                        autoComplete="off"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                     />
                     <Form.Submit disabled={isInvalid} type="submit">
                         Sign In
                     </Form.Submit>

                     <Form.Text>New to Monkflicks? <Form.Link to="/signup">Sign up now.</Form.Link> </Form.Text>
                     <Form.Text>This page is protected by Google reCAPTCHA to ensure you're not like a robot. Although the one in Terminator 2 could fly a helicopter so I think they could figure out a stupid reCAPTCHA.</Form.Text>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
    </>
    );
}