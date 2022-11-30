import React from "react";
import useTitle from "./../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center py-8 text-cyan-500">
        Blogs
      </h2>
      <div className="w-4/5 mx-auto bg-slate-200 p-4 rounded-lg">
        <h4 className="text-xl font-semibold text-cyan-500">
          1: What are the different ways to manage a state in a React
          application?
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL
        </p>
        <h4 className="text-xl font-semibold text-cyan-500">
          2: What is JWT, and how does it work?
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
          compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </p>
        <h4 className="text-xl font-semibold text-cyan-500">
          3: What is the difference between javascript and NodeJS?
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
        <h4 className="text-xl font-semibold text-cyan-500">
          4: How does NodeJS handle multiple requests at the same time??
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
