import React,{useState,useEffect,useRef} from 'react'
import { Form,Button,Segment,TextArea,Divider , Grid, Header, Message,} from 'semantic-ui-react';

import baseUrl from './../utils/baseUrl';
import axios from 'axios';
import {FooterMessage} from "../components/Common/WelcomeMessage"

function Login() {
    return (
        <>
        <Grid  centered columns={2}>
        <Grid.Column>
          <Header  >
            <Header.Content  style={{ color: "#264348" }}>
                LOGIN TO YOUR  ACCOUNT
            </Header.Content>
          </Header>
          <Segment>
            <Form size="large">
              <Form.Field>
                <Form.Input
                  label='Email address'
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email address"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Password'
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
              </Form.Field>
              <Button color="#264348" fluid size="large">
                Login
              </Button>
            </Form>
          </Segment>
          <FooterMessage/>
        </Grid.Column>
      </Grid>



       
       </>
    )
    
}

export default Login
