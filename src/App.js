import React from "react";
import { Header } from "components/Header";

import { CssBaseline, Box, Container } from "@mui/material";

import OptionsTab from "components/OptionsTab";
import LocationCards from "components/LocationCards";
import Footer from "components/Footer";
import "./App.css";
import FooterMenu from "components/FooterMenu";
import { displayOnDesktop } from "theme/commonStyles";
import MobileFooter from "components/MobileFooter";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
          <OptionsTab />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: "100%",
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ md: 3 }}>
            <LocationCards />
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
