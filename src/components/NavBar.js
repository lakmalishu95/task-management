import {AppBar, Toolbar, Typography, styled } from "@mui/material";

import { NavLink } from "react-router-dom";


const Header = styled(AppBar)`
    background: #111111;
`
const Tabs = styled(NavLink)`
    font-size: 20px; 
    margin-right: 20px; 
    color: inherit;
    text-decoration: none; 
`

const NavBar =()=>{
    return (
        <Header position="statistic">
            <Toolbar>
                <Tabs to="/">Code for Interview</Tabs>
                <Tabs to ="/all">All Tasks</Tabs>
                <Tabs to="/add">Add Task</Tabs>
                
            </Toolbar>
        </Header>
    )

}

export default NavBar;