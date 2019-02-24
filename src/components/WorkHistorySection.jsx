import React, { Fragment } from "react";
import styled from "styled-components";
import { Col, Row } from "react-styled-flexboxgrid";

import { SectionTitle, SectionIcon } from "./Generics";
import WorkIcon from "../icons/briefcase.svg";

const workHistory = [
  {
    position: "Data Science Intern",
    company: "Acorns",
    location: "Irvine, USA",
    startDate: "03/2017",
    endDate: "05/2018",
    tasks: [
      "Worked on RFM model better tailor Found Money product features",
      "Modeled user financial behavior to predict spend patterns",
      "Built algorithms to parse raw user transactions into merchants",
      "Automated categorization of transactions into an in-house taxonomy"
    ]
  },
  {
    position: "Full Stack Developer",
    company: "Neura",
    location: "Tel Aviv, Israel",
    startDate: "05/2016",
    endDate: "03/2017",
    tasks: [
      "Developed and published a React Native port of an iOS sample app",
      "Automated data quality verification with Python",
      "Created and maintained developer documentation",
      "Wrote internal dashboards in both React and Angular",
      "Ported an application from Objective-C to Swift",
      "Migrated and maintained databases"
    ]
  },
  {
    position: "Certified Flight Instructor",
    company: "Aces High Aviation",
    location: "Long Beach, USA",
    startDate: "03/2014",
    endDate: "05/2016",
    tasks: [
      "Created and delivered lesson plans to students on the ground",
      "Taught students practical skills necessary to procure their private pilot's license",
      "Conducted air tours of Los Angeles and the surrounding areas"
    ]
  },
  {
    position: "Product Development Intern",
    company: "Whipclip",
    location: "Santa Monica, USA",
    startDate: "06/2015",
    endDate: "08/2015",
    tasks: [
      "Responsible for design sprints, development of new UGC platform",
      "Managed projects for new web assets including daily.whipclip.com",
      "Created management system for job applications"
    ]
  }
];

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
  color: rgb(30, 144, 255);
`;

const WorkHistorySection = () => {
  return (
    <WorkSectionContainer xs={12}>
      <Row>
        <SectionIcon src={WorkIcon} alt="College graduation" />
        <SectionTitle>Work</SectionTitle>
      </Row>
      {workHistory.map(job => (
        <Fragment>
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
              <CompanyAndLocation>{`${job.company}, ${
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
                  return <li>{task}</li>;
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
