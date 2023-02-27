import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";
import { TOKEN, DATABASE_ID } from "@/config";
import axios from "axios";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Next 포트폴리오</title>
        <meta name="description" content="Next로 만드는 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {projects.results.map((project) => (
        <ProjectItem data={project} key={project.id} />
      ))}
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
    data: {
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    },
  };
  const projects = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
