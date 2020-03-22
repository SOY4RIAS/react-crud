import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <h1 className="text-xl p-4">Home Page</h1>
  </div>
)

export default Home