import styles from "./index.module.css";

export const Navbar = () => {
  return (
    <nav
      className={styles.navbar}
    >
      <h3>FAST{' '}
        <span>FIX</span>
      </h3>

      <button
        className="btn"
      >Menu</button>
    </nav>
  )
}