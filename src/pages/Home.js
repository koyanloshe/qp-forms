import React, { useEffect, useRef, useState } from "react";
import Field from "../components/field";
import HomeConfig from "../configs/Home";
/**
 * @function Home - Home page
 */
const Home = () => {
  const pointer = useRef();

  const captureFormData = (e) => {
    let formData = {};
    Array.from(e.nativeEvent.target.elements).forEach((eachInput) =>
      eachInput.type !== "submit"
        ? (formData[eachInput.name] = eachInput.value)
        : null
    );
    return formData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = captureFormData(e);
    console.log(form);
  };

  return (
    <>
      <form ref={pointer} onSubmit={handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            {HomeConfig.map((config, id) => (
              <Field key={id} {...config} />
            ))}
            <div className="my-3 col-2">
              <input type="submit" className="btn btn-primary w-100" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Home;
