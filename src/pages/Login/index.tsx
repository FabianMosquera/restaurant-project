import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Context } from "../../context/context";

interface INform {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function Login() {
  const { onSubmit } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INform>({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input placeholder="password" type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Login;
