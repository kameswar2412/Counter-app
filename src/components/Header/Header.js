import React,{useState} from "react";
import {AppBar,Toolbar,MenuItem,Menu} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import headerStyles from './HeaderStyles';

 const Header=()=> {

    const classes = headerStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    console.log(isMenuOpen,isMobileMenuOpen)
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);


    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu        anchorEl={anchorEl}        anchorOrigin={{ vertical: "top", horizontal: "right" }}        id={menuId}
        keepMounted        transformOrigin={{ vertical: "top", horizontal: "right" }}        open={isMenuOpen}
        onClose={handleMenuClose}      >
        <MenuItem onClick={handleMenuClose}>
        <IconButton aria-label="account of current user"      aria-controls="primary-search-account-menu"
            aria-haspopup="true"            color="inherit"          >

            <AccountCircle />

          </IconButton>
          <span>Profile</span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <HomeIcon fontSize="large" />
           </IconButton>
           <span>Home</span>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
        <IconButton aria-label="show 4 new mails" color="inherit">
                    <LogoutIcon />
          </IconButton>
          <span>LogOut</span>
        </MenuItem>
      </Menu>
    );
  
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
           <MenuItem >
          <IconButton aria-label="account of current user"      aria-controls="primary-search-account-menu"
            aria-haspopup="true"            color="inherit"          >

            <AccountCircle />

          </IconButton>
          <span>Profile</span>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <HomeIcon fontSize="large" />
           </IconButton>
           <span>Home</span>
        </MenuItem>
        <MenuItem>
         <IconButton aria-label="show 4 new mails" color="inherit">
                    <LogoutIcon />
          </IconButton>
          <span>LogOut</span>
        </MenuItem>
       
       
      </Menu>
    );
    return (
        <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
             
              <Typography style={{color:'white', fontWeight:"700", fontSize:'18px'}} variant="h6" noWrap>
                Portfolio
              </Typography>
              
               <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
               
                  { true ?    <MenuItem>
                                     <IconButton aria-label="show 4 new mails" color="inherit">
                                        <LoginIcon />
                                     </IconButton>
                                      <span>LogIn</span>
                               </MenuItem>
                      :
                  
                  <IconButton edge="end"  onClick={handleProfileMenuOpen} aria-label="account of current user" aria-controls={menuId}  aria-haspopup="true"
                    color="inherit"  >
                    <AccountCircle />
                  </IconButton>

                   }
                
              </div>
              <div className={classes.sectionMobile}>
              
                
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  
                <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </div>
    );
  }
  export default Header;