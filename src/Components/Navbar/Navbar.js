import React, { useState, useEffect } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import NavLogo from "../../Images/NavbarLogo.png";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Navbar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import axios from 'axios';


const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { addressData } = props;

  // let[addressData1, setAddressData] = useState("city & pincode");

  useEffect(()=>{
    // setAddressData(addressData[0].city + " " + addressData[0].pincode)
    // setAddressData(addressData[0].city);
  },[])

  // console.log(addressData1);

  let [search, setSearch] = useState("");

//for navigate between pages
  let navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("userName"); // Check if the user is logged in


// Account and Lists navigation---------------------------------------------------------

  function navigateToAccounts(){
    if (isLoggedIn) 
    {
        navigate("/account");
    } 
    else 
    {
      navigate("/login"); // Redirect to the "login" page if the user is not logged in
    }
  };


// Orders & Returns navigation---------------------------------------------------------

  const navigateToOrders = () => {
    const isLoggedIn = sessionStorage.getItem("userName"); // Check if the user is logged in

    if (isLoggedIn) 
    {
        navigate("/orders");
    } 
    else 
    {
      navigate("/login"); // Redirect to the "login" page if the user is not logged in
    }
  };

// Cart button navigation-------------------------------------------------------------------

  const navigateToCart = () => {
    const isLoggedIn = sessionStorage.getItem("userName"); // Check if the user is logged in

    if (isLoggedIn) {
      navigate("/ShoppingCart");
    } 
    else 
    {
      navigate("/cart");
    }
  };

  function logout() {
    sessionStorage.clear();
    alert("Logged out");
  }

  //Cart count---------------------------------------------------------------------------
  let cartCount = sessionStorage.getItem("cartLength");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem("userId")}`;

    axios.get(apiUrl)
      .then((response) => {
        sessionStorage.setItem("cartLength",response.data.length);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  //Navbar Toggle ------------------------------------------------------------------------

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <div
        className="drawerNavLogo"
        style={{ display: "flex" }}
        onClick={() => navigate("/")}
      >
        <IconButton onClick={handleDrawerToggle}>
          <big style={{ color: "black" }}>❌</big>
        </IconButton>
        <img src={NavLogo} alt="Navigation Logo" />
      </div>
      <Divider style={{color:'black'}}/>
      <List>
        {/* {navItems.map((item) => ( */}
        <ListItem key='' disablePadding style={{display:'flex', flexDirection:'column'}}>
        {/* search box for tab */}
          <div className="mobNavSearchBox">
            <div className="navSelector">
              <select>
                <option>All</option>
                <option></option>
              </select>
            </div>
            <div className="navInput">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="navSearchIcon" onClick={()=> navigate(`/search/${search}`)}>
              <SearchIcon />
            </div>
          </div>
          {/* --------------------------------------------- */}
          <ListItemButton sx={{ textAlign: "center", display:'flex',flexDirection:'column'}}>
            <Button
              className="navbarButtons"
              onClick={() => navigateToAccounts()}
            >
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  color:'black'
                }}
              >
                <span style={{ display: "flex", alignItems: "baseline" }}>
                  <small>Account & Lists</small>
                  <ArrowDropDownIcon />
                </span>
                <div className="accountsDiv">
                </div>
              </section>
            </Button>

            <Button
              className="navbarButtonsDrawer"
              onClick={() => navigateToOrders()}
            >
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <span>
                  <small>Returns</small>
                </span>
                <span>
                  <small>& Orders</small>
                </span>
              </section>
            </Button>
            <Button
              id="cart"
              className="navbarButtons"
              style={{ color: "black" }}
              onClick={() => navigateToCart()}
            >
              <Badge
                badgeContent={cartCount}
                style={{ color: "orange", fontWeight: "22" }}
                color="error"
              >
                <div style={{ color: "black" }}>
                  <AddShoppingCartIcon />cart
                </div>
              </Badge>
              
            </Button>
            <Button className="logOut" onClick={() => logout()}>Log Out</Button>

            
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", background: "#223449" }}>
      <CssBaseline />
      <AppBar className='DesktopNav' component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            className='toggleIcon'
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <big>=</big>
          </IconButton>
          <div className="navLogo" onClick={() => navigate("/")}>
            <img src={NavLogo} alt="Navigation Logo" />
          </div>

          <Box className="navCenter">
            <div className="deliver">
              {/* <div className="locationIcon">
                <PlaceIcon />
              </div> */}
              <div className="userName">
                <span style={{ color: "white" }}>
                  Deliver to 
                  <br/>{sessionStorage.getItem("userName")}
                </span>
                {/* <span style={{ color: "white" }}>{addressData1}</span> */}
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
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="navSearchIcon" onClick={()=> navigate(`/search/${search}`)}>
                <SearchIcon />
              </div>
            </div>
          </Box>
{/* search box for tab */}
          <div className="tabNavSearchBox">
              <div className="navSelector">
                <select>
                  <option>All</option>
                  <option></option>
                </select>
              </div>
              <div className="navInput">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="navSearchIcon" onClick={()=> navigate(`/search/${search}`)}>
                <SearchIcon />
              </div>
            </div>
{/* --------------------------------------------- */}
          <Box className="NavButtons" sx={{ display: { xs: "none", sm: "flex" } }}>
            <button
              className="navbarButtons"
              onClick={() => navigateToAccounts()}
            >
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <span>
                  <small>Hello, {sessionStorage.getItem("userName")}</small>
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <small>Account & Lists</small>
                  <ArrowDropDownIcon />
                </span>
                <div className="accountsDiv">
                  <div>
                    <ul>
                      <big className="yourAccount">
                        <b>Your Account</b>
                      </big>
                      <li className="yourAccount">Your Account</li>
                      <li id="orders" onClick={() => navigate("/orders")}>
                        Your Orders
                      </li>
                      <li>Your Wish List</li>
                      <li>Your Recommendations</li>
                      <li>Your Prime Membership</li>
                      <li>Your Prime Video</li>
                      <li>Your Subscribe & Save Items</li>
                      <li>Memberships & Subscriptions</li>
                      <li>Your Seller Account</li>
                      <li>Manage Your Content and Devices</li>
                      <li>Your Free Amazon Business Account</li>
                      <li>Switch Accounts</li>
                      {isLoggedIn?(
                        <>
                          <li onClick={() => logout()}>Sign Out</li>
                        </>)
                        :(
                          <>
                            <li onClick={() => navigate('/login')}>Sign In</li>
                          </>
                        )
                        }
                      
                    </ul>
                  </div>
                </div>
              </section>
            </button>

            <button
              className="navbarButtons"
              onClick={() => navigateToOrders()}
            >
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <span>
                  <small>Returns</small>
                </span>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <small>
                    & Orders
                  </small>
                </span>
              </section>
            </button>
            <button
              id="cart"
              className="navbarButtons"
              onClick={() => navigateToCart()}
            >
              <Badge
                badgeContent={cartCount}
                style={{ color: "orange", fontWeight: "22" }}
                color="error"
              >
                <div style={{ color: "white" }}>
                  <AddShoppingCartIcon />
                </div>
              </Badge>
              cart
            </button>
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
