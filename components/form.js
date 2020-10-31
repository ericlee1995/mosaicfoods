import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import styles from './form.module.css';

export default function ZipcodeAndEmailForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      className={styles.form}
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Row className={styles['form-row']}>
        <Form.Group
          className={styles['form-group']}
          md="4"
          controlId="zip_code"
        >
          <Form.Label className={styles['form-label']}>Zipcode</Form.Label>
          <Form.Control
            className={styles['form-control']}
            type="text"
            placeholder="Shipping zipcode"
            required
          />
          <Form.Control.Feedback className={styles['form-error']} type="invalid">
            Please enter a valid zip code.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row className={styles['form-row']}>
        <Form.Group className={styles['form-group']} md="4" controlId="email">
          <Form.Label className={styles['form-label']}>E-mail</Form.Label>
          <Form.Control
            className={styles['form-control']}
            type="text"
            placeholder="E-mail address"
            required
          />
          <Form.Control.Feedback className={styles['form-error']} type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <button className={styles.button} type="submit">
        Get Started
      </button>
      <div className={styles['tos-privacy']}>
        <p className={styles.p}>
          By continuing, you agree to our{' '}
          <a href="/pages/terms-of-service" target="_blank">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/pages/privacy-policy" target="_blank">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </Form>
  );
}
