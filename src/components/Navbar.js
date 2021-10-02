import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import {MenuIcon} from '@material-ui/icons/Menu';


// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));
function NavBar() {	
		// const classes = useStyles();
    return(
<div>
 <nav className="navbar navbar-expand-lg navbar-warning bg-dark">
		<div className="container-fluid">
		  <a className="navbar-brand text-warning" href="#">ApiaryBee</a>
		  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div className="navbar-nav ms-auto">
				<li className="nav-link" aria-current="page">
				<Link to="/" className="text-warning">Home</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/about" className="text-warning" >About Us</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/apiary" className="text-warning" >Apiary</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/services" className="text-warning">Services</Link>
				</li>
				<li className="nav-link" aria-current="page">
				<Link to="/contact" className="text-warning">Contact</Link>
				</li>
		    </div>
		  </div>
		</div>
		</nav>
		
	


  {/* // return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  // ); */}

</div> 
        );
}

export default NavBar;