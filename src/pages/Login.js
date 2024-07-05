import React from "react";
import "./login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email!")
      .required("Email is required")
      .test(
        "is-gmail",
        "Email must be a valid Gmail address",
        function (value) {
          return /@gmail\.com$/.test(value);
        }
      ),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{7,}$/,
        "Password must contain at least one uppercase letter, lowercase letter, number, special character, and be at least 7 characters long"
      ),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    // Displaying alert with login credentials entered by the user
    alert(`Login credentials:\nEmail: ${email}\nPassword: ${password}`);

    resetForm();
  };

  return (
    <div className="loginpg">
      <div className="box">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validateSchema}
        >
          <Form className="form">
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
