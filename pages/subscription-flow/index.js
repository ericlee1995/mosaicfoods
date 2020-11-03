import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TopBanner from '../../components/topBanner';
import Header from '../../components/header';
import MealMenu from '../../components/mealMenu';
import PlanFrequency from '../../components/planFrequency';
import OrderConfirmation from '../../components/orderConfirmation';
import styles from '../../styles/Build.module.css';

export default function Build({ mealplans }) {
  const [selectedMeals, setSelectedMeals] = useState({});
  const router = useRouter();
  const currentStep = router.query.step;

  const getSelectedMeals = (selectedMeals) => {
    setSelectedMeals(selectedMeals);
  };

  return (
    <div className={styles['container']}>
      <Head>
        <title>Build Your Box | Mosaic</title>
        <link
          rel="icon"
          href="https://cdn.shopify.com/s/files/1/0080/0735/2399/files/favicon_32x32.png?v=1553009090"
          type="image/png"
        />
      </Head>
      <TopBanner />
      <Header step={currentStep} />
      {currentStep === '2' && (
        <MealMenu
          mealplans={mealplans}
          getSelectedMeals={getSelectedMeals}
        />
      )}
      {currentStep === '3' && <PlanFrequency />}
      {currentStep === '4' && <OrderConfirmation cart={selectedMeals} />}
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get meal plans
  const res = await fetch(
    'https://31f00e43edfec849dbd813185afc6df5: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@freshmealplans-demo.myshopify.com/admin/api/2020-10/products.json'
  );
  const mealplans = await res.json();
  // By returning { props: mealplans }, the Build component
  // will receive `mealplans` as a prop at build time
  return {
    props: {
      mealplans,
    },
  };
}
