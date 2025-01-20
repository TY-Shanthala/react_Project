import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomizedDialogs from "./Dialog";

const LetterCard = ({ letterData }) => {
  const [openPopup, setOpenPopup] = React.useState(false);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const dateFormat = (date) => {
    const [day, month, year] = date.split("/"); // Destructure to directly extract day, month, and year
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${day} ${months[month - 1]} ${year}`;
  };

  return (
    <div>
      <Card
        sx={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Ensures content is spaced correctly
          height: 600,
          borderRadius: 2,
          boxShadow: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {letterData.username[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
              {letterData.username}
            </Typography>
          }
          subheader={dateFormat(letterData.date)}
        />
        <CardMedia
          onClick={handleClickOpen}
          component="img"
          image={letterData.imageAddress}
          alt={letterData.description}
          sx={{
            flexGrow: 1, // Allows the image to expand dynamically
            width: "100%",
            height: "50%",
            objectFit: "contain", // Ensures no cropping
            backgroundColor: "#f0f0f0", // Neutral background
            padding: 1, // Adds padding for better spacing
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingBottom: 0, // Removes extra padding to keep content aligned
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Limit description to 3 lines
            }}
          >
            {letterData.description}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          // sx={{
          //   justifyContent: "space-between", // Ensures icons are spread out
          //   borderTop: "1px solid #e0e0e0", // Optional: Adds a divider at the top
          // }}
          className="flex justify-between border-t border-gray-300"
        >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <CustomizedDialogs
        open={openPopup} // Dialog state
        handleClose={handleClosePopup} // Function to close the dialog
        letterData={letterData} // Pass letter data to the popup
      />
    </div>
  );
};

export default LetterCard;
