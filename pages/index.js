import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next 포트폴리오</title>
        <meta name="description" content="Next로 만드는 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Next 포트폴리오</h1>
    </Layout>
  );
}
