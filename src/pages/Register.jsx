import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput label="username" name="username" type="text" />
        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
          <p className="text-center mt-4">
            Already a member?{" "}
            <Link to="/login" className="ml-2 link link-hover link-primary">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Register;
