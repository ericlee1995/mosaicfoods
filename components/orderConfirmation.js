import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './orderConfirmation.module.css';

export default function OrderConfirmation({ cart }) {
  const [textareaValue, setTextareaValue] = useState('');
  const [remainingChars, setRemainingChars] = useState(100);
  const router = useRouter();

  const onChange = (event) => {
    setTextareaValue(event.target.value);
    setRemainingChars(100 - event.target.value.length);
  };

  const getOriginalPrice = () => {
    const total = Object.values(cart).reduce((total, item) => {
      return total + +item.price;
    }, 0);
    return total === 0 ? '' : '$' + total.toFixed(2);
  };

  const getDiscountedPrice = (discount) => {
    const subtotal = Object.values(cart).reduce((total, item) => {
      return total + +item.price;
    }, 0);
    const total = subtotal - discount;
    return total < 0.1 ? 'Free' : '$' + total.toFixed(2);
  };

  const getMeals = (meal) => {
    return (
      <div key={meal[0]}>
        <div className={styles.meal}>
          <div className={styles['image-wrapper']}>
            <div
              className={styles['placeholder-image']}
              style={{ backgroundImage: meal[1].image }}
            ></div>
          </div>
          <div className={styles['meal-order-name']}>
            <div className={styles['meal-qty']}>
              <span className={styles['meal-num']}>{meal[1].quantity}</span>
            </div>
            <h3>{meal[1].title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="subscription-flow-main">
      <div className={styles.subscriptionFlow}>
        <div
          className={`${styles['shop-section-order-confirmation']} ${styles['shop-section']}`}
        >
          <section
            id="order-confirmation"
            className={`${styles['order-confirmation']} ${styles['flow-view']} ${styles['flow-view-active']}`}
          >
            <div className={styles['content-wrapper']}>
              <div
                className={`${styles['confirmation-header']} ${styles['fade-in-on-scroll']} ${styles.visible}`}
              >
                <h1>Review Your Order</h1>
              </div>
              <div className={styles['plan-info-wrapper']}>
                <div className={styles['delivery-confirmation']}>
                  <div className={`${styles.row} ${styles.divider}`}>
                    <div>
                      <h4 className={styles['plan-header']}>
                        <label>Your Plan</label>
                      </h4>
                      <Link
                        href={{
                          pathname: '/subscription-flow',
                          query: { ...router.query, step: 3 },
                        }}
                      >
                        <a className={styles['cta-link']}>Edit</a>
                      </Link>
                      <div className={styles['subscription-plan-text']}>
                        <span>You'll receive your delivery </span>
                        <span className={styles['data-highlight']}>
                          {router.query.frequency === '1'
                            ? 'every week'
                            : `every ${router.query.frequency} weeks`}
                        </span>
                        <span> and can skip or cancel any time.</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.row} ${styles.divider}`}>
                    <div>
                      <h4>
                        <label>Your First Delivery Date</label>
                      </h4>
                      <select className={styles['select-css']}>
                        <option value="2020-11-06">Friday, November 6</option>
                        <option value="2020-11-10">Tuesday, November 10</option>
                        <option value="2020-11-13">Friday, November 13</option>
                        <option value="2020-11-17">Tuesday, November 17</option>
                        <option value="2020-11-20">Friday, November 20</option>
                        <option value="2020-11-24">Tuesday, November 24</option>
                        <option value="2020-12-01">Tuesday, December 1</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles['full-width']}>
                      <h4>
                        <label>Instructions for Delivery Driver</label>
                      </h4>
                      <textarea
                        maxLength="100"
                        className={styles['cart-note']}
                        value={textareaValue}
                        placeholder="Leave outside the house."
                        onChange={onChange}
                      ></textarea>
                      <p className={styles['textarea-characters-remaining']}>
                        <span className={styles['characters-remaining-number']}>
                          {remainingChars}
                        </span>{' '}
                        characters remaining
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.row} ${styles['divider-mobile']} ${styles['collapse-mobile']}`}
                  >
                    <a
                      href="/checkout"
                      className={`${styles['cta-button']} ${styles['next-step']}`}
                    >
                      Continue to Checkout
                    </a>
                  </div>
                </div>
                <div className={styles['box-confirmation']}>
                  <div>
                    <div className={styles.row}>
                      <div>
                        <h4 className={styles['box-header']}>
                          <label>Your Box</label>
                        </h4>
                        <Link
                          href={{
                            pathname: '/subscription-flow',
                            query: { ...router.query, step: 2 },
                          }}
                        >
                          <a className={styles['cta-link']}>Edit</a>
                        </Link>
                        <div className={styles.pricing}>
                          <div>
                            <div
                              className={`${styles['price-confirmation']} ${styles['box-price-confirmation']}`}
                            >
                              <div
                                className={`${styles['price-confirmation-original']} ${styles['price-confirmation-strikethrough']}`}
                              >
                                {getOriginalPrice()}
                                <span
                                  className={styles['hide-on-strikethrough']}
                                >
                                  {' '}
                                  total
                                </span>
                              </div>
                              <span>
                                <span
                                  className={
                                    styles['price-confirmation-discount']
                                  }
                                >
                                  {getDiscountedPrice(15)}{' '}
                                </span>
                                <span className={styles['price-shipping']}>
                                  + Free Shipping
                                </span>
                              </span>
                            </div>
                            <div
                              className={
                                styles['price-confirmation-discount-detail']
                              }
                            >
                              <i className="fas fa-check-circle"></i> $15 off
                              first box
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-confirmation">
                      {cart && Object.entries(cart).map(getMeals)}
                    </div>
                  </div>
                  <a
                    href="/checkout"
                    className={`${styles.toCheckoutSidebar} ${styles['cta-button']} ${styles['next-step']}`}
                  >
                    Continue to Checkout
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
