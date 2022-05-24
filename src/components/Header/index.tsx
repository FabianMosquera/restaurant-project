import { HeaderContainer } from "./StyledHeader";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";
import { useContext } from "react";

function Login(props: any){
  return (
    <>
    <Link to="/login"> Login</Link>
    <Link to="/signup"> SignUp</Link>
    </>
    )
}

function Logout(){
  return (
    <>
    <Link to="/signup"> SignUp</Link>
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
