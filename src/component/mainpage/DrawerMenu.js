import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = ["Home", "Category", "Features"];

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"top"}
      >
        <List>
          {PAGES.map((page, index) => {
            return (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{
          color: "grey",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "6px",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerMenu;
