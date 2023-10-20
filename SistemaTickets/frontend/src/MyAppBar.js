import React from "react";
import { AppBar } from "react-admin";
import { useTheme } from "@mui/material/styles";

export const MyAppBar = () => {
  const theme = useTheme();

  const appBarColor = theme.palette.mode === "dark" ? "#a80808" : "#ff0000";

  return (
  <AppBar style={{ backgroundColor: appBarColor }} />
  );
};

/*
import { AppBar, ToggleThemeButton } from "react-admin";

export const MyAppBar = () => <AppBar toolbar={<ToggleThemeButton />} />;
*/