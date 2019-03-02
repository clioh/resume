import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle } from "./Generics";
import { ReactComponent as WorkIcon } from "../icons/briefcase.svg";

const Position = styled.p`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const DatesCol = styled(Col)`
  text-align: center;
  p {
    margin-bottom: 0.5rem;
  }
`;

const WorkSectionContainer = styled(Col)`
  margin-top: 2rem;
`;

const CompanyAndLocation = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  color: ${props => props.themeColor};
`;

const WorkHistorySection = ({ workHistory, themeColor }) => {
  return (
    <WorkSectionContainer xs={12}>
      <Row>
        <WorkIcon
          fill={themeColor}
          width="2rem"
          height="2rem"
          alt="Place of work"
        />
        <SectionTitle themeColor={themeColor}>Work</SectionTitle>
      </Row>
      {workHistory.map(job => (
        <Fragment key={job.company}>
          <Row>
            <Col xs={6}>
              <Position>{job.position}</Position>
            </Col>
            <DatesCol xs={6}>
              <span>
                <p>
                  {job.startDate} – {job.endDate}
                </p>
              </span>
            </DatesCol>
          </Row>
          <Row>
            <Col xs={12}>
              <CompanyAndLocation themeColor={themeColor}>{`${job.company}, ${
                job.location
              }`}</CompanyAndLocation>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>{job.description}</Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ul>
                {job.tasks.map(task => {
                  return <li key={task}>{task}</li>;
                })}
              </ul>
            </Col>
          </Row>
        </Fragment>
      ))}
    </WorkSectionContainer>
  );
};

export default WorkHistorySection;
