import React from "react";
import { Menu,Container,Icon } from "semantic-ui-react";
import {useRouter} from 'next/router'
import Link from 'next/link'

function Navbar() {
  const router = useRouter()

  const isActive=route=>router.pathname===route


  return (
    <Menu borderless  fluid style={{ backgroundColor: "#264348" }}>
      <Container text >
        <Link href="/login">
          <Menu.Item header active={isActive('/login')} style={{ color: "white" }}>
            <Icon size="large" name="sign in" />
            <span >Login</span>
          </Menu.Item>
        </Link>

        <Link href="/signup">
          <Menu.Item header active={isActive('/signup')} style={{ color: "white" }}>
            <Icon size="large" name="signup" />
            <span>Signup</span>
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Navbar;
