import React from "react";
import Image from "next/legacy/image";

const ProjectItem = ({ data }) => {
  const projectTitle = data.properties.Name.title[0]?.plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const startD = data.properties.WorkPeriod.date.start;
  const endD = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        src={imgSrc}
        alt="Cover Image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        className="rounded-t-xl"
        quality={100}
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{projectTitle}</h1>
        <h3 className="mt-4 text-lg">{description}</h3>
        <a href={githubLink}>깃허브 바로가기</a>
        <h3 className="mt-4 text-lg">
          작업기간 : {startD} ~ {endD} ({calculatedPeriod(startD, endD)}일)
        </h3>
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 w-30 dark:bg-sky-700"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
