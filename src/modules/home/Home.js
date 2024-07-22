import React from 'react';
import Navbar from '../../components/header/Navbar';
import Carousel from '../../components/Carousel';
import FeatureGrid from '../../components/Featuregrid';
import ProductList from '../../components/ProductList';
import NewProductList from '../../components/NewProductList';
import BestSaleList from '../../components/BestSaleList';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <FeatureGrid />
      <ProductList />
      <NewProductList />
      <BestSaleList />
      <Footer />
    </div>
  );
}

export default Home;
