import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { LayoutList, CheckSquare, LogOut, X, Menu } from "lucide-react";

import { UserContext } from "../../contexts/UserContext";
import styles from "./NavBar.module.css";
import Logo from "../../assets/images/logo-h.svg";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >{isOpen ? (
    <X className={styles.toggleIcon} />
  ) : (
    <div className={styles.toggleClosedContent}>
      <Menu className={styles.toggleIcon} />
       <span className={styles.toggleDivider} />
      <img src={Logo} alt="Logo" className={styles.toggleLogo} />
    </div>
  )}
      </button>

        <nav className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
  <div className={styles.topSpace} />

  <Link to="/" className={styles.logoLink}>
    <img src={Logo} alt="Logo" className={styles.logo} />
  </Link>

  {isOpen && (
    <>
      <div className={styles.separator} />

      <div className={styles.menu}>
        <Link to="/applications" className={styles.item}>
          <LayoutList className={styles.icon} />
          <span className={styles.label}>Applications</span>
        </Link>

        <Link to="/follow-ups" className={styles.item}>
          <CheckSquare className={styles.icon} />
          <span className={styles.label}>Follow Ups</span>
        </Link>

        {user && (
          <button
            type="button"
            className={`${styles.item} ${styles.signOut}`}
            onClick={handleSignOut}
          >
            <LogOut className={styles.icon} />
            <span className={styles.label}>Sign Out</span>
          </button>
        )}
      </div>
    </>
  )}
</nav>
    </>
  );
};

export default NavBar;