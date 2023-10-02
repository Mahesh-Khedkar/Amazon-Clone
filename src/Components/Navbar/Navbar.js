import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../Images/NavbarLogo.png";
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css";

const drawerWidth = 240;
const navItems = ["Account & Lists", "Returns & Orders", "Cart"];



function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

//for navigate between pages
  let navigate = useNavigate();

  // console.log(navItems.map((item) => item==="Account & Lists"))

  // if(navItems.map((item) => item==="Account & Lists"))
  // {
    
  // }


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>

      <div className="drawerNavLogo" style={{display:'flex'}} onClick={() => navigate('/')}>
          <IconButton> 
            <big style={{color:'black'}}>❌</big>
          </IconButton>
        <img src={NavLogo} alt="Navigation Logo" />
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "#223449" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <big>=</big>
          </IconButton>
          <div className="navLogo" onClick={() => navigate('/')}>
            <img src={NavLogo} alt="Navigation Logo" />
          </div>
          
          <Box className="navCenter">
            <div className="deliver">
              <div className="locationIcon">
                <PlaceIcon/>
              </div>
              <div className="userName">
                <span style={{color:'white'}}>Deliver to Khedkar</span>
                <span style={{color:'white'}}>Pune 411014</span>
              </div>
            </div>
            <div className="navSearchBox">
              <div className="navSelector">
                <select>
                  <option>All</option>
                  <option></option>
                </select>
              </div>
              <div className="navInput">
                <input type="text"></input>
              </div>
              <div className="navSearchIcon">
                <SearchIcon/>
              </div>
            </div>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            
            {/* {navItems.map((item) => (
              <Button className="navbarButtons" key={item} sx={{ color: "#fff", height: "50px" }}>
                {item}
              </Button>
            ))} */}

              {/* <Button className="navbarButtons" >
                Country
              </Button> */}
              <Button className="navbarButtons" onClick={() => navigate('/login')}>
                Account
              </Button>
              <Button className="navbarButtons" onClick={() => navigate('/login')}>
                Returns & Orders
              </Button>
              <Button className="navbarButtons" onClick={() => navigate('/cart')}>
                Cart
              </Button>

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
