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
          Local (UI) state - Local state is data we manage in one or another
          component.Local state is most often managed in React using the
          useState hook.For example, local state would be needed to show or hide
          a modal component or to track values for a form component, such as
          form submission, when the form is disabled and the values of a form’s
          inputs.
        </p>
        <h4 className="text-xl font-semibold text-cyan-500">
          2: How does prototypical inheritance work?
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object. getPrototypeOf and Object.
        </p>
        <h4 className="text-xl font-semibold text-cyan-500">
          3: What is a unit test? Why should we write unit tests?
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
