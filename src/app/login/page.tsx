"use client";
import useLogin from "@/hooks/api/auth/useLogin";
import { useFormik } from "formik";

const Login = () => {
  const { login } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
  });
  return (
    <div className="container px-4 h-screen flex justify-center pt-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="max-w-[480px] border">
          <label>Email</label>
          <input name="email" type="text" className="border-w-full  text-black" onChange={formik.handleChange} />
          <label>Password</label>
          <input name="password" type="password" className="border-w-full  text-black" onChange={formik.handleChange} />

          <button className="p-4 border mt-10" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
