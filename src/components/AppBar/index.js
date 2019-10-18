import React from "react";

import NavBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function AppBar() {
  return (
    <div>
      <NavBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Aplicação Teste v1.0.0
          </Typography>
        </Toolbar>
      </NavBar>
    </div>
  );
}
