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

function Logout(props:any){
  return (
    <>
    <Linkslogin to="/login" onClick={props.onClick}> Logout</Linkslogin>
    </>
    )
}

function Header() {
  const { userLogin, setUserLogin } = useContext(Context);


  return (
    <HeaderContainer>
      <h3>{userLogin ? <Logout onClick={()=>setUserLogin("")}/>:<Login/>}</h3>
    </HeaderContainer>
  );
}

export default Header;
