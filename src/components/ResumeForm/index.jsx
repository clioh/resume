import React from "react";
import { Formik, Form } from "formik";

import * as yup from "yup";

import SkillSection from "./SkillSection";
import GeneralSection from "./GeneralSection";
import WorkHistorySection from "./WorkHistorySection";
import EducationSection from "./EducationSection";
import LanguagesSection from "./LanguagesSection";
import HobbiesSection from "./HobbiesSection";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email required"),
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  address1: yup.string().required("Address required"),
  address2: yup.string(),
  city: yup.string().required("City required"),
  stateCode: yup.mixed().required("State required"),
  countryCode: yup.mixed().required("Country required"),
  zip: yup.number().required("ZIP code is required")
});

const ResumeForm = () => {
  return (
    <Formik
      initialValues={{
        workHistory: [
          {
            position: "Example position",
            company: "Example company",
            location: "Example Location",
            startDate: "01/2001",
            endDate: "10/2010",
            tasks: ["Example task/responsibility"]
          }
        ],
        education: [
          {
            fieldOfStudy: "Field of study",
            dateEnded: "Graduation Date",
            universityName: "Your university",
            universityLocation: "Location"
          }
        ],
        general: {
          github: "https://github.com/harpe116",
          firstName: "First",
          lastName: "Last",
          address: "Address",
          phoneNumber: "123-456-7890",
          email: "youremail@example.com"
        },
        languages: [
          {
            language: "English",
            level: "Native"
          }
        ],
        hobbies: [
          {
            name: "Hobby 1",
            icon:
              "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/How%20to%20calm%20a%20hyper%20dog.jpg?itok=Vg7ueySi",
            link: "https://google.com"
          },
          {
            name: "Hobby 2",
            icon: "printer"
          }
        ],
        technicalSkills: [
          {
            name: "Example skill",
            level: 0.7
          }
        ]
      }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        debugger;
      }}
      render={({ submitForm, isSubmitting, errors, touched, values }) => {
        const {
          technicalSkills,
          workHistory,
          education,
          languages,
          hobbies
        } = values;
        return (
          <Form style={{ marginBottom: "2rem", maxWidth: "1000px" }}>
            <GeneralSection />
            <WorkHistorySection workHistory={workHistory} />
            <EducationSection education={education} />
            <LanguagesSection languages={languages} />
            <HobbiesSection hobbies={hobbies} />
            <SkillSection technicalSkills={technicalSkills} />
          </Form>
        );
      }}
    />
  );
};

export default ResumeForm;
