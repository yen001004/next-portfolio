import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";
import { TOKEN, DATABASE_ID } from "@/config";
import axios from "axios";

export default function Projects({ result }) {
  console.log(result);
  return (
    <Layout>
      <Head>
        <title>Next 포트폴리오</title>
        <meta name="description" content="Next로 만드는 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getServerSideProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    data: { page_size: 100 },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: {}, // will be passed to the page component as props
  };
}
