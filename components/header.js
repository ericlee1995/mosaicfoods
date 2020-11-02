import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <a className={styles.complete} href="/">
            <img
              className={styles.img}
              src="//cdn.shopify.com/s/files/1/0080/0735/2399/t/13/assets/mosaic-logo-jade.png?v=14340860641704568239"
            />
          </a>
        </div>
        <nav className={styles['subscription-flow']}>
          <ul>
            <li className={styles['li-complete']}>
              <a href="/">
                <span className={styles['nav-text']}>Availability</span>
              </a>
            </li>

            <li className={`${styles['flow-nav-active']} ${styles.current}`}>
              <a href="#">
                <span className={styles['nav-text']}>Meals</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles['nav-text']}>Frequency</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles['nav-text']}>Confirm</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
