import { Box, Container } from "@mui/material";
import { flexBetweenCenter, dFlex, displayOnDesktop } from "theme/commonStyles";

import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import ProfileSettings from "./ProfileSettings";
import MobileSearch from "./MobileSearch";

export const Header = () => {
  return (
    <Box sx={{ ...dFlex, minHeight: 70, borderBottom: "1px solid #ddd" }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 90, px: 4 }}>
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ display: { sx: "flex", md: "none" } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
