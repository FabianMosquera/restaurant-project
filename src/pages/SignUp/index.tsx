import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface INform {
  email: string;
  password: string;
  confirmPass: string;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")], "Imbecil")
      .required(),
  })
  .required();

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INform>({ resolver: yupResolver(schema) });

  const history = useNavigate();

  const onSubmit = async (data: INform, e: any) => {
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {"Content-type":"application/json;charset=utf-8"},
        body: JSON.stringify({
            email: data.email, password: data.password,
           }),
      });
      history("/login")
      const json = await res.json();
      console.log(json);
      e.target.reset();
    } catch (error) {
      return error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="email" type="email" {...register("email")} />
      {errors.email && <p>{errors.email.message}</p>}
      <input placeholder="password" type="text" {...register("password")} />
      {errors.password && <p>{errors.password.message}</p>}
      <input
        placeholder="confirm password"
        type="text"
        {...register("confirmPass")}
      />
      {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
      <input type="submit" value="submit" />
    </form>
  );
}

export default SignUp;
