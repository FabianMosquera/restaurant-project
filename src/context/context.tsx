import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface INform {
  email: string;
  password: string;
}

interface INuser {
  userLogin: string;
  onSubmit: (data: INform, e: any) => Promise<void>;
}
interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Context = createContext<INuser | any>("");

export function UserContextProvider({ children }: IProps) {
  const [userLogin, setUserLogin] = useState<String>();
  const history = useNavigate();

  let test;

  const onSubmit = async (data: INform, e: any) => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const json = await res.json();
      json.map(({ email, password }: any) => {
        if (data.email === email && data.password === password) {
          test = data.email;
          history("/restaurant");
          setUserLogin(data.email)
        } else {
          console.log("nonas");
        }
      });
      console.log(json);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  const user = {
    userLogin,
    onSubmit,
  };

  return <Context.Provider value={user}>{children}</Context.Provider>;
}
