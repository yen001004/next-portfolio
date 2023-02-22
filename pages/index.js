import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next 포트폴리오</title>
        <meta name="description" content="Next로 만드는 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
