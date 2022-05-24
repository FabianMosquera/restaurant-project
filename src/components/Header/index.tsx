import { HeaderContainer } from "./StyledHeader";
import { Context } from "../../context/context";
import { useContext } from "react";

function Login(){
  return (
    <>
    <a href="http://localhost:3000/login"> Login</a>
    <a href="http://localhost:3000/signup"> Sign Up</a>
    </>
    )
}

function Logout(){
  return (
    <>
    <a href="http://localhost:3000/"> Logout</a>
    </>
    )
}

function Header() {
  const { userLogin } = useContext(Context);
  
  return (
    <HeaderContainer>
      <h2>{userLogin ? <Logout/>: <Login/>}</h2>
    </HeaderContainer>
  );
}

export default Header;
