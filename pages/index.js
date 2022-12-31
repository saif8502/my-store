import React from "react";
import { client } from "../lib/client";
import { Product, ModalBanner, HeroBanner } from "../components";


const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData && bannerData[1]} />

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <div className="flex flex-dir-column">
      <div className="more-reason-heading flex justify-center">
        <h1>Even more reasons to shop with us.</h1>
      </div>
      <div className="card-banner-container">
        <ModalBanner/>
      </div>
      
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData},
  };
};

export default Home;
