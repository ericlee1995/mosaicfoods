import Head from 'next/head';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './modal.module.css';

export default function Dialog() {
  const [modelShow, setModelShow] = useState(true);

  const handleClose = () => setModelShow(false);

  return (
    <div className="dialog">
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <Modal
        className={styles.modal}
        dialogClassName={styles.dialog}
        show={modelShow}
        onHide={handleClose}
      >
        <Modal.Header
          className={styles['modal-header']}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div className={styles['modal-wrapper']}>
            <h2 className={styles.h2}>Let's get started!</h2>
            <p className={styles['h1-subline']}>
              Here are a few things to keep in mind as you build your box:
            </p>
            <div className={styles['modal-instructions']}>
              <div className={styles['modal-instruction']}>
                <div className={styles['modal-instruction-headline']}>
                  <img
                    className={styles.img}
                    src="//cdn.shopify.com/s/files/1/0080/0735/2399/t/13/assets/panel-how-it-works-veggies.png?v=179413039493036009"
                  />
                  <h3 className={styles.h3}>
                    <span className={styles['mobile-line-break']}>Order</span>{' '}
                    minimum
                  </h3>
                </div>
                <p className={styles.p}>
                  Our{' '}
                  <strong className={styles.strong}>
                    $70 minimum order size
                  </strong>{' '}
                  ensures that we minimize packaging waste and keep delivery
                  affordable.
                </p>
              </div>
              <div className={styles['modal-instruction']}>
                <div className={styles['modal-instruction-headline']}>
                  <img
                    className={styles.img}
                    src="//cdn.shopify.com/s/files/1/0080/0735/2399/t/13/assets/panel-how-it-works-delivery.png?v=12342569234036195937"
                  />
                  <h3 className={styles.h3}>Free shipping over $100</h3>
                </div>
                <p className={styles.p}>
                  Add $100 or more of products to your cart and you'll get{' '}
                  <strong>free next-day shipping</strong> (a $7.99 value)!
                </p>
              </div>
            </div>
            <button
              className={styles['modal-close-button']}
              onClick={handleClose}
            >
              Got it!
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
