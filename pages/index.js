import React from "react";
import Head from "next/head";
import App from "../components/App";

const Home = () => (
  <div>
    <Head>
      <title>Simple Dice</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      />
    </Head>
    <App />
  </div>
);

export default Home;
