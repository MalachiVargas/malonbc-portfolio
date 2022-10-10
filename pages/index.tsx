import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Work } from '../components/Work'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-h-screen lg:max-w-[1700px]">
      <Head>
        <title>MAL ON BC</title>
        <meta
          name="Malonbc's Portfolio"
          content="I'm a full stack web 3 developer working! You can find my projects here where I work on sites built with tools like Solidity, GraphQL, ThreeJS and NextJS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
        <Hero />
        <Work />
      </header>

      <main></main>

      <footer></footer>
    </div>
  )
}

export default Home
