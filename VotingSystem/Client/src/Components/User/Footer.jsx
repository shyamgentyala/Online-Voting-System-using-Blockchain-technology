import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => (
  <>
    <AppBar position="static" component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">Team-23 Major Project MLRITM</Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default Footer;
