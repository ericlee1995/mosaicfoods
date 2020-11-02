import Link from 'next/link';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import styles from './form.module.css';

export default function ZipcodeAndEmailForm() {
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'zipcode':
        setZipcode(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      default:
        console.error('An error occurred while processing form data.');
    }
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
            name="zipcode"
            value={zipcode}
            placeholder="Shipping zipcode"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback
            className={styles['form-error']}
            type="invalid"
          >
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
            name="email"
            value={email}
            placeholder="E-mail address"
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback
            className={styles['form-error']}
            type="invalid"
          >
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Link
        href={{
          pathname: '/subscription-flow',
          query: { zip_code: zipcode, email, step: 2 },
        }}
      >
        <button className={styles.button} type="submit">
          Get Started
        </button>
      </Link>
      <div className={styles['tos-privacy']}>
        <p className={styles.p}>
          By continuing, you agree to our{' '}
          <a
            className={styles['tos-privacy-a']}
            href="/terms-of-service"
            target="_blank"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            className={styles['tos-privacy-a']}
            href="/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </Form>
  );
}
