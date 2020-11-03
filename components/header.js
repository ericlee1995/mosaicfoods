import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './header.module.css';

export default function Header({ step }) {
  const router = useRouter();

  return (
    <header className={styles.head}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          <a href="/">
            <img
              className={styles.img}
              src="//cdn.shopify.com/s/files/1/0080/0735/2399/t/13/assets/mosaic-logo-jade.png?v=14340860641704568239"
            />
          </a>
        </div>
        <nav className={styles['subscription-flow']}>
          <ul>
            <li
              className={cn({
                [styles.complete]: 1 < +step,
              })}
            >
              <Link href="/">
                <a>
                  <span className={styles['nav-text']}>Availability</span>
                </a>
              </Link>
            </li>

            <li
              className={cn({
                [styles.complete]: 2 < +step,
                [styles['flow-nav-active']]: step === '2',
                [styles.current]: step === '2',
              })}
            >
              <Link
                href={
                  2 <= +step
                    ? {
                        pathname: '/subscription-flow',
                        query: { ...router.query, step: 2 },
                      }
                    : 'javascript: void(0)'
                }
              >
                <a>
                  <span className={styles['nav-text']}>Meals</span>
                </a>
              </Link>
            </li>
            <li
              className={cn({
                [styles.complete]: 3 < +step,
                [styles['flow-nav-active']]: step === '3',
                [styles.current]: step === '3',
              })}
            >
              <Link
                href={
                  3 <= +step
                    ? {
                        pathname: '/subscription-flow',
                        query: { ...router.query, step: 3 },
                      }
                    : 'javascript: void(0)'
                }
              >
                <a>
                  <span className={styles['nav-text']}>Frequency</span>
                </a>
              </Link>
            </li>
            <li
              className={cn({
                [styles.complete]: 4 < +step,
                [styles['flow-nav-active']]: step === '4',
                [styles.current]: step === '4',
              })}
            >
              <Link
                href={
                  4 <= +step
                    ? {
                        pathname: '/subscription-flow',
                        query: { ...router.query, step: 4 },
                      }
                    : 'javascript: void(0)'
                }
              >
                <a>
                  <span className={styles['nav-text']}>Confirm</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
