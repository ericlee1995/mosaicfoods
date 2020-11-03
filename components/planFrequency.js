import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import cn from 'classnames';
import styles from './planFrequency.module.css';

export default function PlanFrequency() {
  const [frequency, setFrequency] = useState(2);
  const router = useRouter();

  return (
    <main className={styles['subscription-flow-main']}>
      <div className={styles.subscriptionFlow}>
        <div
          className={`${styles['shop-section']} ${styles['shop-section-plan-frequency']}`}
        >
          <section
            className={`${styles['flow-view']} ${styles['flow-view-active']} ${styles['plan-frequency']}`}
          >
            <div className={styles['choose-frequency']}>
              <div style={{ wclassNameth: '100%' }}>
                <div className={styles['choose-frequency-content']}>
                  <div
                    className={styles['choose-frequency-subscription-content']}
                  >
                    <h1>I'd like deliveries...</h1>
                    <div className={styles['plan-frequency-options']}>
                      <div
                        className={cn({
                          [styles['plan-frequency-option']]: true,
                          [styles['plan-frequency-subscription-option']]: true,
                          [styles['plan-frequency-option-selected']]:
                            frequency === 1,
                        })}
                        onClick={() => setFrequency(1)}
                      >
                        <div
                          className={styles['plan-frequency-option-content']}
                        >
                          <div
                            className={styles['plan-frequency-option-every']}
                          >
                            Every
                          </div>
                          <h2>1</h2>
                          <div
                            className={styles['plan-frequency-option-weeks']}
                          >
                            Week
                          </div>
                        </div>
                        <div
                          className={styles['plan-frequency-option-checkmark']}
                        >
                          <i className="fas fa-check-circle"></i>
                        </div>
                      </div>
                      <div
                        className={cn({
                          [styles['plan-frequency-option']]: true,
                          [styles['plan-frequency-subscription-option']]: true,
                          [styles['plan-frequency-option-selected']]:
                            frequency === 2,
                        })}
                        onClick={() => setFrequency(2)}
                      >
                        <div className={styles['plan-frequency-option-header']}>
                          Most popular
                        </div>
                        <div
                          className={styles['plan-frequency-option-content']}
                        >
                          <div
                            className={styles['plan-frequency-option-every']}
                          >
                            Every
                          </div>
                          <h2>2</h2>
                          <div
                            className={styles['plan-frequency-option-weeks']}
                          >
                            Weeks
                          </div>
                        </div>
                        <div
                          className={styles['plan-frequency-option-checkmark']}
                        >
                          <i className="fas fa-check-circle"></i>
                        </div>
                      </div>
                      <div
                        className={cn({
                          [styles['plan-frequency-option']]: true,
                          [styles['plan-frequency-subscription-option']]: true,
                          [styles['plan-frequency-option-selected']]:
                            frequency === 4,
                        })}
                        onClick={() => setFrequency(4)}
                      >
                        <div
                          className={styles['plan-frequency-option-content']}
                        >
                          <div
                            className={styles['plan-frequency-option-every']}
                          >
                            Every
                          </div>
                          <h2>4</h2>
                          <div
                            className={styles['plan-frequency-option-weeks']}
                          >
                            Weeks
                          </div>
                        </div>
                        <div
                          className={styles['plan-frequency-option-checkmark']}
                        >
                          <i className="fas fa-check-circle"></i>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={{
                        pathname: '/subscription-flow',
                        query: { ...router.query, step: 4, frequency },
                      }}
                    >
                      <button
                        className={styles['plan-frequency-continue-button']}
                      >
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
                <div className={styles['plan-frequency-notices']}>
                  <div className={styles['plan-frequency-notice']}>
                    <div className={styles['plan-frequency-notice-icon']}>
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div className={styles['plan-frequency-notice-text']}>
                      Love it or your money back
                    </div>
                  </div>
                  <div className={styles['plan-frequency-notice']}>
                    <div className={styles['plan-frequency-notice-icon']}>
                      <i className="fas fa-shipping-fast"></i>
                    </div>
                    <div className={styles['plan-frequency-notice-text']}>
                      Free, 100% recyclable delivery
                    </div>
                  </div>
                  <div className={styles['plan-frequency-notice']}>
                    <div className={styles['plan-frequency-notice-icon']}>
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className={styles['plan-frequency-notice-text']}>
                      Skip or cancel at any time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
