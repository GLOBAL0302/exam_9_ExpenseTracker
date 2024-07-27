import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ExposureIcon from '@mui/icons-material/Exposure';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">FinanceTracker<AccountBalanceWalletIcon/> </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav d-flex gap-5 ">
            <li className="nav-item">
              <a href="#" className="text-decoration-none text-black">Categories</a>
            </li>
            <span className="border border-1"></span>
            <li className="nav-item">
            <a href="#" className="text-decoration-none text-black">Add<ExposureIcon/></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;