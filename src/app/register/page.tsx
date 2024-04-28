"use client";
import useRegister from "@/hooks/api/auth/useRegister";
import { useFormik } from "formik";

const Register = () => {
    const {register} = useRegister();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        register(values);
    },
  });
  return (
    <div className="container px-4 h-screen flex justify-center pt-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="max-w-[480px] border">
          <label>Full Name</label>
          <input name="fullName" type="text" className="border-w-full text-black" onChange={formik.handleChange} />
          <label>Email</label>
          <input name="email" type="text" className="border-w-full  text-black" onChange={formik.handleChange}/>
          <label>Password</label>
          <input name="password" type="password" className="border-w-full  text-black" onChange={formik.handleChange}/>

          <button className="p-4 border mt-10" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
