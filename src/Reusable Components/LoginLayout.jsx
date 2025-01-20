import React from "react";
import { Box, Typography } from "@mui/material";

const LoginLayout = ({ children, height = "", title }) => {
  return (
    <Box
      sx={{
        marginTop:"10vh",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('https://cdn.pixabay.com/photo/2023/08/30/09/34/ai-generated-8222940_1280.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          minHeight: height,
          width: { xs: "90%", sm: "80%", md: "50%", lg: "35%", xl: "30%" }, // Responsive width
          padding: 3,
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Lighter and more transparent background
          borderRadius: 5,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease",
          ":hover": {
            transform: "scale(1.05)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <div style={{ flexBasis: "100%" }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              marginBottom: 2,
              color: "#2c3e50",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          {children}
        </div>
      </Box>
    </Box>
  );
};

export default LoginLayout;
