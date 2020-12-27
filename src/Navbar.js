import React, { useState } from 'react';
import { Divider, AppBar, Toolbar, IconButton, Typography, Button, List, Drawer, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { Menu, ExpandMore, ExpandLess, Settings, AccountCircleRounded } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css'


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [openCollapse, setOpenCollapse] = React.useState(false);

    const handleDrawer = () => {
        setOpen(true)
    };
    const classes = "home";

    function handleOpenSettings() {
        setOpenCollapse(!openCollapse);
    }

    return (
        <>
            <div className="menu">
                <Menu onClick={handleDrawer} />
            </div>
            <Drawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className="" style={{ height: '100%', width: '365px' }}>
                    <div className="closeUser">
                        <div className="userDrawer">
                            <AccountCircleRounded />
                            <h3 id="headerLogIn">Hello, Sign in </h3>
                        </div>
                        <CloseIcon id="close" onClick={() => setOpen(false)} />
                    </div>
                    <Divider />
                    <div className="shopByCat">
                        <h>SHOP BY CATEGORY</h>
                    </div>
                    <ListItem button onClick={handleOpenSettings}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Amazone Music" />
                        {openCollapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                        <List>
                            {["STREAM MUSIC",
                                "Amazon Music Unlimited",
                                "Amazon Music HD",
                                "Prime Music",
                                "Free Streaming Music",
                                "Open Web Player",
                                "BUY MUSIC",
                                "CDs & Vinyl",
                                "Download Store"].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                        </List>
                    </Collapse>

                </div>

            </Drawer>
        </>
    )
}

export default Navbar;
