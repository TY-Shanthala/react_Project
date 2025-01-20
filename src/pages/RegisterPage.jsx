import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import LoginLayout from "../Reusable Components/LoginLayout";
import PageLayout from "../Components/PageLayout";

const RegisterPage = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password cannot be longer than 20 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleFormSubmit = () => {
    formikDetails.resetForm();
  };

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <PageLayout>
      <LoginLayout height="70vh" title={"Register"}>
        <form onSubmit={formikDetails.handleSubmit}>
          <Stack spacing={2}>
            <div>
              <TextField
                className="w-full"
                label="Username"
                name="userName"
                variant="outlined"
                value={formikDetails.values.userName}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                error={
                  formikDetails.touched.userName &&
                  Boolean(formikDetails.errors.userName)
                }
                helperText={
                  formikDetails.touched.userName &&
                  formikDetails.errors.userName
                }
              />
            </div>
            <div>
              <TextField
                className="w-full"
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                size="medium"
                value={formikDetails.values.email}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                error={
                  formikDetails.touched.email &&
                  Boolean(formikDetails.errors.email)
                }
                helperText={
                  formikDetails.touched.email && formikDetails.errors.email
                }
              />
            </div>
            <div>
              <TextField
                className="w-full"
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                size="medium"
                value={formikDetails.values.password}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                error={
                  formikDetails.touched.password &&
                  Boolean(formikDetails.errors.password)
                }
                helperText={
                  formikDetails.touched.password &&
                  formikDetails.errors.password
                }
              />
            </div>
            <div>
              <TextField
                className="w-full"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                size="medium"
                value={formikDetails.values.confirmPassword}
                onChange={formikDetails.handleChange}
                onBlur={formikDetails.handleBlur}
                error={
                  formikDetails.touched.confirmPassword &&
                  Boolean(formikDetails.errors.confirmPassword)
                }
                helperText={
                  formikDetails.touched.confirmPassword &&
                  formikDetails.errors.confirmPassword
                }
              />
            </div>
            <div>
              <Button
                sx={{ backgroundColor: "#16a085" }}
                variant="contained"
                color="primary"
                fullWidth
                className="mt-4 px-5 py-2 font-semibold hover:bg-[#1abc9c] shadow-md hover:shadow-lg"
                type="submit"
              >
                SUBMIT
              </Button>
            </div>
          </Stack>
        </form>
      </LoginLayout>
    </PageLayout>
  );
};

export default RegisterPage;
