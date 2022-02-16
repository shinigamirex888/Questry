import React,{useState,useEffect,useRef} from 'react'
import { loginUser } from "../utils/authUser";

import { Form,Button,Segment,TextArea,Divider , Grid, Header, Message,} from 'semantic-ui-react';

import baseUrl from './../utils/baseUrl';
import axios from 'axios';
import {FooterMessage,HeaderMessage} from "../components/Common/WelcomeMessage"
import cookie from "js-cookie";


function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });


  const { email, password } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);


  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async e => {
    e.preventDefault();

    await loginUser(user, setErrorMsg, setFormLoading);
  };

  useEffect(() => {
    const isUser = Object.values({ email, password }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);


  useEffect(() => {
    document.title = "Welcome Back";
    const userEmail = cookie.get("userEmail");
    if (userEmail) setUser(prev => ({ ...prev, email: userEmail }));
  }, []);


    return (
        <>
        <Grid  centered columns={2}>
        <Grid.Column>
          
          <Segment>
          <HeaderMessage/>
          <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />

        <Segment>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            fluid
            icon="envelope"
            iconPosition="left"
            type="email"
          />

          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword)
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
            required
          />

          <Divider hidden />
          <Button
            icon="signup"
            content="Login"
            type="submit"
            color="green"
            disabled={submitDisabled}
          />
        </Segment>
      </Form>
                
          </Segment>
          <FooterMessage/>
        </Grid.Column>
      </Grid>



       
       </>
    )
    
}

export default Login
