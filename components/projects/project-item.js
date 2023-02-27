import React from "react";
import Image from "next/image";

const ProjectItem = ({ data }) => {
  const projectTitle = data.properties.Name.title[0]?.plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col p-6 m-3 rounded-md bg-slate-700">
      {/* <Image src={imgSrc} alt="Cover Image" className="w-full h-6/10" /> */}
      <h1>{projectTitle}</h1>
      <h3>{description}</h3>
      <a href={githubLink}>깃허브 바로가기</a>
    </div>
  );
};

export default ProjectItem;
