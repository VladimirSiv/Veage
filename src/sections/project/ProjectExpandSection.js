import React from "react";
import { RichTextField, useGetOne } from "react-admin";

const ProjectExpandSection = (props) => {
  const { data, loaded } = useGetOne("projects", props.record.id);
  if (!loaded) return <span>Loading</span>;
  return (
    <dl>
      <dt>
        <h2>Description</h2>
      </dt>
      <dd>
        <RichTextField record={data} source="description" />
      </dd>
    </dl>
  );
};

export default ProjectExpandSection;
