import { Box, Typography } from "@mui/material";
import {flexCenter} from "theme/commonStyles";

import { FaAirbnb } from "react-icons/fa";
import { pink } from "@mui/material/colors";

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        component="h3"
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        airBnb
      </Typography>
    </Box>
  );
};

export default Logo