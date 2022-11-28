import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:container mx-auto lg:max-w-screen-xl my-10">
        <div className="border p-5">
          <h2 className="text-lg font-semibold">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <hr />
          <p>There are four main types of state you need to properly manage in your React apps:<br/>
          Local (UI) state – Local state is data we manage in one or another component.<br/>
          Global (UI) state – Global state is data we manage across multiple components.
          Server state – Data that comes from an external server that must be integrated with our UI state.<br/>
          URL state – Data that exists on our URLs, including the pathname and query parameters.
          </p>
        </div>
        <div className="border p-5">
          <h2 className="text-lg font-semibold"> How does prototypical inheritance work?</h2>
          <hr />
          <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
        </div>
        <div className="border p-5">
          <h2 className="text-lg font-semibold">What is a unit test? Why should we write unit tests?</h2>
          <hr />
          <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
        </div>
        <div className="border p-5">
          <h2 className="text-lg font-semibold">React vs. Angular vs. Vue?</h2>
          <hr />
          <p>
            <strong className="text-info">React : </strong>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.<br/>
            <strong className="text-error">Angular : </strong>Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.<br/>
            <strong className="text-success">Vue : </strong>Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
