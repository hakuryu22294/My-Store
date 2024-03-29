import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          label="username"
          name="username"
          type="text"
          defaultValue="hakuryu"
        />
        <FormInput
          label="email"
          name="email"
          type="email"
          defaultValue="quangha@gmail.com"
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          defaultValue="123456"
        />
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
