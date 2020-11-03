import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import Dialog from './modal';
import styles from './mealMenu.module.css';

export default function MealMenu({ mealplans, getSelectedMeals }) {
  const [cart, setCart] = useState({});
  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setFilterOpen(!filterOpen);
  };

  const toggleMobileCart = () => {
    setMobileCartOpen(!mobileCartOpen);
  };

  const getFilterOptions = () => {
    return ['Paleo', 'Traditional', 'Subscription', 'Keto'].map(
      (value, index) => (
        <li key={index}>
          <a tabIndex="-1">
            <input type="checkbox" value={value.toLowerCase()} />
            <label htmlFor={value.toLowerCase()}>{value}</label>
          </a>
        </li>
      )
    );
  };

  const getMeal = (meal) => {
    const imgUrl = meal.image
      ? `url(${meal.image.src.replace('https:', '')})`
      : '';

    return (
      <div key={meal.id} className={styles.meal}>
        <div
          className={styles['meal-img']}
          style={{ backgroundImage: `${imgUrl}` }}
        ></div>
        <div className={styles['meal-details']}>
          <h1 className={styles['meal-title']}>{meal.title}</h1>
          <div className={`${styles['meal-info']} ${styles.rte}`}>
            {meal.body_html}
            <span className={styles.price}>
              {meal.variants[0].price === '0.00'
                ? 'Free'
                : '$' + meal.variants[0].price}
            </span>
          </div>
        </div>
        <div className={styles['add-to-box']}>
          <button
            className={cn({
              [styles['add-to-box-btn']]: true,
              [styles['qty-visible']]: meal.id in cart,
            })}
            onClick={() =>
              addMeal(meal.id, imgUrl, meal.title, meal.variants[0].price)
            }
          >
            {meal.id in cart ? 'Add Another' : 'Add to Box'}
          </button>
          <div
            className={styles['box-qty']}
            style={{ display: meal.id in cart ? 'inline-flex' : 'none' }}
          >
            <div
              className={styles['circle']}
              onClick={() => removeMeal(meal.id)}
            >
              –
            </div>
            <h3>
              <span className={styles['box-count']}>
                {cart[meal.id]?.quantity === undefined
                  ? 0
                  : cart[meal.id]?.quantity}
              </span>
            </h3>
            <div
              className={styles['circle']}
              onClick={() =>
                addMeal(meal.id, imgUrl, meal.title, meal.variants[0].price)
              }
            >
              +
            </div>
          </div>
        </div>
      </div>
    );
  };

  const addMeal = (id, image, title, price) => {
    if (id in cart) {
      cart[id].quantity += 1;
      setCart({ ...cart });
      return;
    }
    const newCartItem = {
      [id]: {
        image,
        title,
        price,
        quantity: 1,
      },
    };
    setCart({ ...newCartItem, ...cart });
  };

  const removeMeal = (id) => {
    if (cart[id].quantity > 1) {
      cart[id].quantity -= 1;
      setCart({ ...cart });
      return;
    }
    const newCart = { ...cart };
    delete newCart[id];
    setCart({ ...newCart });
  };

  const getCartItems = ([key, value]) => {
    return (
      <div key={key}>
        <div className={styles['meal-order']}>
          <div
            className={styles['placeholder-image']}
            style={{ backgroundImage: value.image }}
          ></div>
          <div className={styles['meal-order-name']}>
            <h3>{value.title}</h3>
            <div className={styles['meal-order-details']}>
              <div className={styles['meal-qty']}>
                <div className={styles.modify}>
                  <span
                    className={styles.subtract}
                    onClick={() => removeMeal(key)}
                  >
                    –
                  </span>
                  <span className={styles['meal-num']}>{value.quantity}</span>
                  <span
                    className={styles.add}
                    onClick={() => addMeal(key, value.image, value.title)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getSelectedMeals(cart);
    document.getElementById('meal-cart-continue').disabled =
      Object.keys(cart).length === 0;
  }, [cart]);

  return (
    <main className={styles['subscription-flow-main']}>
      <Dialog />
      <div className={styles.subscriptionFlow}>
        <div
          className={`${styles['shop-section-meal-menu']} ${styles['shop-section']}`}
        >
          <section
            className={`${styles['choose-your-meals']} ${styles['flow-view-active']}`}
          >
            <div className={styles['choose-your-meals-wrapper']}>
              <div className={styles['collection-links']}>
                <a href="#paleo">Paleo</a>
                <a href="#snowboard">Snowboard</a>
                <a href="#others">Others</a>
              </div>
              <div className={styles['meal-select-main']}>
                <div className={styles['meal-menu']}>
                  <div className={styles['meal-actions']}>
                    <div className={`${styles.filters} ${styles.dropdown}`}>
                      <div
                        className={styles['filters-filter-btn']}
                        onClick={toggleDropdown}
                      >
                        <h2>
                          Filters&nbsp;<i className="fas fa-caret-down"></i>
                        </h2>
                      </div>

                      <div
                        className={cn({
                          [styles['dropdown-menu-wrapper']]: true,
                          [styles['dropdown-open']]: filterOpen,
                        })}
                      >
                        <div className={styles['dropdown-menu']}>
                          {getFilterOptions()}
                          <div className={styles['dropdown-menu-controls']}>
                            <div
                              className={styles['dropdown-menu-controls-clear']}
                            >
                              Clear
                            </div>
                            <div
                              className={styles['dropdown-menu-controls-save']}
                            >
                              Save
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles['filters-filter-list']}></div>
                    </div>

                    <div className={styles['chooseForMe']}>
                      <div className="chooseForMe-content">
                        <h2>Choose for me</h2>
                        <p>Based on customer favorites</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles['meal-list-refresh']}>
                    <i className="fas fa-sync-alt"></i>
                  </div>

                  <div className="meal-collection-list">
                    <div className="meal-collection">
                      <a className="collection-anchor" name="paleo"></a>
                      <h2 className={styles['collection-title']}>Paleo</h2>
                      <div className={styles['meal-list']}>
                        {mealplans &&
                          mealplans.products
                            .filter(
                              (product) => product.product_type === 'Paleo'
                            )
                            .map(getMeal)}
                      </div>
                    </div>
                    <div className="meal-collection">
                      <a className="collection-anchor" name="snowboard"></a>
                      <h2 className={styles['collection-title']}>Snowboard</h2>
                      <div className={styles['meal-list']}>
                        {mealplans &&
                          mealplans.products
                            .filter(
                              (product) => product.product_type === 'Snowboard'
                            )
                            .map(getMeal)}
                      </div>
                    </div>
                    <div className="meal-collection">
                      <a className="collection-anchor" name="others"></a>
                      <h2 className={styles['collection-title']}>Others</h2>
                      <div className={styles['meal-list']}>
                        {mealplans &&
                          mealplans.products
                            .filter((product) => product.product_type === '')
                            .map(getMeal)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles['cart-container-wrapper']}>
                  <div
                    className={cn({
                      [styles['cart-container']]: true,
                      [styles.expanded]: mobileCartOpen,
                    })}
                  >
                    <div className={styles['your-box']}>
                      <h1 onClick={toggleMobileCart}>
                        <span className={styles['desktop-title']}>
                          Your Box
                        </span>
                        <span className={styles['mobile-price']}>
                          <span>Your Box</span>
                          <div className={styles['meal-cart-total-price']}>
                            <span className={styles['expander-btn']}></span>
                          </div>
                        </span>
                      </h1>
                      <div
                        className={`${styles['shipping-gauge-wrapper']} ${styles.mobile}`}
                      >
                        <div className={styles['shipping-gauge-details']}>
                          <i className="fas fa-shipping-fast"></i>
                          <span
                            className={`${styles['shipping-gauge-text']} ${styles.bold}`}
                          >
                            Free Shipping
                          </span>
                        </div>
                      </div>
                      <div className={styles['meal-cart']}>
                        {!!Object.keys(cart).length &&
                          Object.entries(cart).map(getCartItems)}
                      </div>
                      <div className={styles['cart-footer']}>
                        <div
                          className={`${styles['shipping-gauge-wrapper']} ${styles.desktop}`}
                        >
                          <div className={styles['shipping-gauge-details']}>
                            <i className="fas fa-shipping-fast"></i>
                            <span className={styles['shipping-gauge-text']}>
                              Free Shipping
                            </span>
                          </div>
                        </div>
                        <Link
                          href={{
                            pathname: '/subscription-flow',
                            query: { ...router.query, step: 3 },
                          }}
                        >
                          <button
                            id="meal-cart-continue"
                            className={styles['continue-to-checkout']}
                          >
                            Continue
                          </button>
                        </Link>
                      </div>
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
