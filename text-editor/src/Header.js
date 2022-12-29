import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
return (
	<AppBar position="static">
		<Toolbar style={{backgroundColor:"red"}}>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="small"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		/>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 100 }}>
			Your Text Editor
		</Typography>
		</Toolbar>
	</AppBar>
);
}
