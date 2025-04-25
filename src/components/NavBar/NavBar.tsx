import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly"
  }))

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem className="nav-item-glitch" component={Link} to="/">About</MenuItem>
        <MenuItem className="nav-item-glitch" component={Link} to="/skills">Skills</MenuItem>
        <MenuItem className="nav-item-glitch" component={Link} to="/projects">Projects</MenuItem>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar
