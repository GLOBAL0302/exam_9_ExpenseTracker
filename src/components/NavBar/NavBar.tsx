import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExposureIcon from '@mui/icons-material/Exposure';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white mb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          FinanceTracker
          <AccountBalanceWalletIcon />{' '}
        </NavLink>
        <div className="" id="navbarNav">
          <ul className="navbar-nav d-flex gap-5 align-items-center">
            <li className="nav-item border-end border-2 pe-5">
              <NavLink
                to="/categories"
                className="text-decoration-none text-black"
              >
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <Button variant="outlined" color="inherit">
                <NavLink
                  className="text-decoration-none text-black"
                  to={'/addRecord'}
                >
                  Add
                  <ExposureIcon />
                </NavLink>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
