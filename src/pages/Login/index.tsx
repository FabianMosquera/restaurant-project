import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Context } from "../../context/context";
import { ContainerForm, StyledTitle, StyledInput, Styledbtn } from "./StyledLogin";

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
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTitle>Email:</StyledTitle>
        <StyledInput placeholder="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <StyledTitle>Contraseña:</StyledTitle>
        <StyledInput placeholder="password" type="text" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <Styledbtn type="submit" value="submit" />
      </ContainerForm>
    </>
  );
}

export default Login;
