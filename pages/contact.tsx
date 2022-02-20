import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../components/contact/TextError";

const initialValues = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  organization: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

function Contact() {
  return (
    <div className="container mx-auto  flex flex-col items-center justify-evenly bg-slate-100 pt-24 md:flex-row ">
      <div className="pb-10 font-main md:w-full">
        <div className="pl-4 text-3xl font-bold">Get in touch</div>
        <div className="pl-4 text-lg text-zinc-600 md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex w-screen flex-col gap-4 px-6 md:w-1/2">
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <Field
              className="w-full border-2 border-gray-400 p-2"
              type="text"
              name="name"
            />
            <ErrorMessage name="name" component={TextError} />
          </div>
          {/* Email */}
          <div className="">
            <label htmlFor="email">Email</label>
            <Field
              className="w-full border-2 border-gray-400 p-2"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div className="">
            {/* Organization */}
            <label htmlFor="organization">Organization</label>
            <Field
              className="w-full border-2 border-gray-400 p-2"
              type="text"
              name="organization"
            />
            <ErrorMessage name="organization" component={TextError} />
          </div>

          <div className="">
            {/* Message */}
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              className="w-full border-2 border-gray-400 p-2 hover:border-gray-600"
              type="text"
              name="message"
            />
            <ErrorMessage name="message" component={TextError} />
          </div>

          <button
            className="mt-10 w-full rounded-lg border-2 bg-black p-2 font-main text-white hover:bg-slate-800"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
