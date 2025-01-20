import React, { useEffect, useState } from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import bgFileUpload from "../utils/images/soldier.webp";
import PageLayout from "../Components/PageLayout";

const quotes = [
  "Your words may seem small, but to a soldier, they can feel like home.",
  "A letter is a gift soldiers never forget.",
  "Brighten a soldier's day with your kind words.",
  "Small gestures, like letters, create lasting memories.",
  "Let soldiers feel your gratitude through a letter.",
  "Your message could be a soldier’s source of hope.",
  "Every letter tells a soldier they're not forgotten.",
  "Your kindness in words travels farther than you know.",
  "Make a soldier smile with your thoughtful words.",
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileUploadForm() {
  const [filePreview, setFilePreview] = useState("");
  const initialValues = { description: "", file: null };
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    file: Yup.mixed()
      .required("File is required")
      .test(
        "fileType",
        "Only JPEG, JPG, WEBP, and  PNG files are allowed",
        (value) =>
          value &&
          ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
            value.type
          )
      )
      .test(
        "fileSize",
        "File size must be between 500KB and 5MB",
        (value) =>
          value && value.size >= 500 * 1024 && value.size <= 5 * 1024 * 1024
      ),
  });

  const handleSubmit = (values) => {
    alert("Form Submitted!");
    formik.resetForm();
    setFilePreview("");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("file", file);
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  return (
    <PageLayout>
      <div
        style={{ backgroundImage: url(`${bgFileUpload}`) }}
        className="mt-[9vh] flex flex-col  justify-center items-center gap-10 p-10 min-h-screen w-auto bg-no-repeat bg-cover bg-center"
      >
        <div className="flex flex-col justify-center items-center gap-6 shadow-2xl mt-5 p-2 bg-opacity-80 bg-slate-100 sm:w-[90%] md:w-[70%] lg:w-[50%] sm:h-[80%] md:h-[95%]  rounded-xl">
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
          <p className="font-bold text-center text-xl ">
            {quotes[currentQuoteIndex]}
          </p>

          {/* Description */}
          <TextField
            className="w-[45%] text-gray overflow-ellipsis"
            id="description"
            name="description"
            label="Share your thoughts..."
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (

            <p className=" text-sm text-red-500">{formik.errors.description}</p>

          )}

          {/* Upload Button */}
          <Button
            className="w-[45%]"
            component="label"
            variant="contained"
            sx={{ backgroundColor: "#16a085" }}
            startIcon={<CloudUploadIcon />}
          >
            <p className="text-xs p-1 md:text-xs lg:text-md text-center">
              Upload image
            </p>
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
          {formik.touched.file && formik.errors.file && (

            <p className="text-sm text-red-600">{formik.errors.file}</p>

          )}

          {/* Preview */}
          {filePreview && (
            <div className=" w-[45%]">
              <img
                className="h-[25vh] w-[100%] object-fill"
                src={filePreview}
                alt="Preview"
              />
            </div>
          )}

          {/* Submit Button */}
          <Button
            sx={{ backgroundColor: "#16a085" }}
            className="w-[45%] p-2"
            variant="contained"
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
          {/* </LocalizationProvider> */}
        </div>
      </div>
    </PageLayout>
  );
}
