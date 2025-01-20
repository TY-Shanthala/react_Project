import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginLayout from "../Reusable Components/LoginLayout";
import { useNavigate } from "react-router-dom";
import PageLayout from "../Components/PageLayout";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data Submitted:", values);
    setFormValues(values); // Save form values for backend access
    resetForm();
  };

  return (
    <PageLayout>
      <LoginLayout MinHeight="400vh" title=" Sign In">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                  className="border border-gray-700 focus:border-teal-500 focus:ring-0 hover:border-teal-500"
                />
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#2c3e50" },
                      "&:hover fieldset": { borderColor: "#16a085" },
                    },
                  }}
                />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Button
                    sx={{ backgroundColor: "#16a085" }}
                    variant="contained"
                    type="submit"
                    className="px-5 py-2 font-semibold hover:bg-[#1abc9c] shadow-lg shadow-black/20"
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#e74c3c" }}
                    className="px-5 py-2 font-semibold hover:bg-[#c0392b] shadow-lg shadow-black/20"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </LoginLayout>
    </PageLayout>
  );
};

export default LoginPage;
