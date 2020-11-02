import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import TopBanner from '../components/topBanner';
import ZipcodeAndEmailForm from '../components/form';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mosaic Foods | Healthy Frozen Food Delivery</title>
        <link
          rel="icon"
          href="https://cdn.shopify.com/s/files/1/0080/0735/2399/files/favicon_32x32.png?v=1553009090"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>
      <TopBanner />
      <Navbar className={styles.navbar} expand="lg">
        <Navbar.Brand className={styles.logo} href="/"></Navbar.Brand>
      </Navbar>
      <main className={styles.main}>
        <Container className={styles['content-wrapper']}>
          <h1 className={styles.heading}>
            <span className={styles['desktop-line-break']}>
              Plant-powered food
            </span>{' '}
            to fuel your life.
          </h1>
          <p className={styles.subline}>
            <span className={styles['desktop-line-break']}>
              Delivered and ready in 5 minutes —
            </span>{' '}
            no shopping, prep, or cleanup.
          </p>
          <ZipcodeAndEmailForm />
        </Container>
      </main>
      /**
      <div>
        Font made from{' '}
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed
        by CC BY 3.0
      </div>
      **/
    </div>
  );
}
