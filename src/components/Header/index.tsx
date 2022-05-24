import { HeaderContainer, Linkslogin } from "./StyledHeader";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Login(props: any){
  return (
    <>
    <Linkslogin to="/login"> Login</Linkslogin>
    <Linkslogin to="/signup"> SignUp</Linkslogin>
    </>
    )
}

function Logout(){
  return (
    <>
    <Linkslogin to="/signup"> SignUp</Linkslogin>
    </>
    )
}

function Header() {
  const { userLogin } = useContext(Context);
  console.log(userLogin)
  return (
    <HeaderContainer>
      <h2>{userLogin ? <Logout/>:<Login/>}</h2>
    </HeaderContainer>
  );
}

export default Header;
