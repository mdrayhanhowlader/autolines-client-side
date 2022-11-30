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
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
        <h4 className="text-xl font-semibold text-cyan-500">
          4: React vs. Angular vs. Vue?
        </h4>
        <p className="text-md font-semibold text-slate-900 mb-4">
          The first questions that front-end developers have to answer when
          starting a new project are: Which framework should I choose? Which
          framework fits better with my needs? In this article, we will give you
          a quick overview of the most common front-end frameworks currently
          being used, with the aim of helping you to choose the one that best
          fulfills your needs. These frameworks are Angular, React and Vue.js.
          These three frameworks have several things in common, such as each
          follows a component-based architecture and allows creating UI features
          quickly. React and Vue.js are mainly declarative, and while Angular
          could also be declarative, it’s really more imperative. Nevertheless,
          they present some more differences according to their structure,
          architecture and way of working, so let’s dive into all these
          characteristics.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
