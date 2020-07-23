import React from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log(products)
  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:4000/api/products'
  const response = await axios.get(url);
  // return response data as an object
  return { products: response.data }
  // note: this will be merged with existing props
}

export default Home;
