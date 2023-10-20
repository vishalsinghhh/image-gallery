import React from "react";
import IOSSwitch from "../utils/Switch";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Navbar = () => {
  return (
    <div>
      <div>Image Gallery</div>
      <div>
        <input type="text" />
      </div>
      <div>
        <div>
          <div>Explore</div>
          <div>Collection</div>
          <div>Community</div>
        </div>
      </div>
      <div>
        Dark Mode
        <FormGroup>
          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} />
        </FormGroup>
      </div>
    </div>
  );
};

export default Navbar;
