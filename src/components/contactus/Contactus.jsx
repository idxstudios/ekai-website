"use client";
import React, { useState } from "react";
import Logo from "../../assets/ekai-logo.svg";
import Image from "next/image";
import "./styles.scss";
import { IoClose } from "react-icons/io5";
import Arrow from "../../assets/ArrowRight.svg";
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import LockAndKey from "../../assets/lockandkey.png";

const Contactus = ({ isvisible, setIsVisible }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    hearAbout: "",
    workType: "",
    organizationSize: "",
    position: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    hearAbout: "",
    workType: "",
    organizationSize: "",
    position: "",
  });
  function validate1() {
    const newErrors = {};

    // Validate name
    if (!data.name?.length) {
      newErrors.name = "Please fill your name";
    }

    // Validate email
    if (!data.email?.length) {
      newErrors.email = "Please fill your email";
    } else {
      const [username, domain] = data.email.split("@");

      // Validate that the domain is not "gmail.com"
      if (domain?.toLowerCase() === "gmail.com") {
        newErrors.email = "Please enter your work email address";
      }
    }

    // Validate how the user heard about us
    if (data.hearAbout === "Select" || !data.hearAbout) {
      newErrors.hearAbout = "Please select how you heard about us";
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return false;
    } else {
      // Clear any previous errors
      setError({});
      return true;
    }
  }

  function validate2() {
    const newErrors = {};
    if (!data.workType || data.workType === "Select") {
      newErrors.workType = "please select work type";
    }
    if (!data.organizationSize || data.organizationSize === "Select") {
      newErrors.organizationSize = "please select organization size";
    }
    if (!data.position || data.position === "Select") {
      newErrors.position = "please select your position";
    }
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return false;
    } else {
      // Clear any previous errors
      setError({});
      return true;
    }
  }

  const next = async () => {
    if (validate1()) {
      setStep(2);
    }
  };

  async function saveData() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        creation_date: new Date(),
        email: data.email,
        name: data.name,
        hearAbout: data.hearAbout,
        org_size: data.organizationSize,
        role_function: data.position,
        job_function: data.workType,
      });
      return true;
    } catch (error) {
      console.error("Error adding document:", error);
      return error;
    }
  }
  const submit = async () => {
    if (validate2()) {
      const response = await saveData();
      if (response) {
        setSubmitted(true);
      } else {
        console.log(response);
      }
    }
  };

  console.log("userData: ", data);
  const hearAbout = [
    "Select",
    "Search Engine",
    "LinkedIn",
    "Friend or Family",
    " Email Marketing",
    "Event or Conference",
    " Other",
  ];
  const workType = [
    "Select",
    "Software Development",
    "Data Analysis",
    "Project Management",
    "Sales/Marketing",
    " HR/Admin",
  ];
  const size = [
    "Select",
    "0-40",
    "50-500",
    "501-5000",
    ">5000",
    "Individual Contributer",
  ];
  const position = [
    "Select",
    "Senior Management",
    "Manager",
    "Individual Contributer",
  ];
  if (!isvisible) return null;
  return (
    <div className="outerdiv w-full flex justify-center p-20">
      <div className="md:w-1/2 sm:w-full lg:w-1/3 ">
        <div>
          <div className="flex justify-center">
            <Image width={"40px"} height={"125px"} src={Logo} alt="logo-nav" />
          </div>

          <div className="innerdiv">
            <div className="flex justify-between">
              <h3 className="textintro text-2xl">
                {submitted ? "" : "Let us get to know you"}
              </h3>
              <button onClick={setIsVisible}>
                <IoClose size={38} />
              </button>
            </div>
            {!submitted ? (
              <div>
                <div className="content py-10">
                  {step === 1 ? (
                    <div>
                      <div className="my-2">
                        <label
                          class="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="Insert your name"
                          value={data.name}
                          onChange={(e) =>
                            setData({
                              ...data,
                              name: e.target.value,
                            })
                          }
                        />
                        <p className="error">{error.name && error.name}</p>
                      </div>
                      <div className="my-2">
                        <label
                          class="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          Work Email
                        </label>
                        <input
                          type="email"
                          className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="Insert your mail address"
                          value={data.email}
                          onChange={(e) =>
                            setData({
                              ...data,
                              email: e.target.value,
                            })
                          }
                        />
                        <p className="error">{error.email && error.email}</p>
                      </div>
                      <div className="my-2">
                        <label
                          className="block text-gray-700 text-sm mb-2 ml-2"
                          htmlFor="username"
                        >
                          How did you hear about ekai?
                        </label>
                        <select
                          className="border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          value={data.hearAbout}
                          onChange={(e) =>
                            setData({ ...data, hearAbout: e.target.value })
                          }
                        >
                          {hearAbout.map((val, index) => (
                            <option key={index}>{val}</option>
                          ))}
                        </select>
                        <p className="error">
                          {error.hearAbout && error.hearAbout}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="my-2">
                        <label
                          class="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          What type of work do you do?
                        </label>
                        <select
                          className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          value={data.workType}
                          onChange={(e) =>
                            setData({ ...data, workType: e.target.value })
                          }
                        >
                          {workType.map((val, index) => (
                            <option key={index}>{val}</option>
                          ))}
                        </select>
                        <p className="error">
                          {error.workType && error.workType}
                        </p>
                      </div>
                      <div className="my-2">
                        <label
                          class="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          What is the size of your organization?
                        </label>
                        <select
                          className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          value={data.organizationSize}
                          onChange={(e) =>
                            setData({
                              ...data,
                              organizationSize: e.target.value,
                            })
                          }
                        >
                          {size.map((val, index) => (
                            <option key={index}>{val}</option>
                          ))}
                        </select>
                        <p className="error">
                          {error.organizationSize && error.organizationSize}
                        </p>
                      </div>
                      <div className="my-2">
                        <label
                          class="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          What is your current position within the organization?
                        </label>
                        <select
                          className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          value={data.position}
                          onChange={(e) =>
                            setData({ ...data, position: e.target.value })
                          }
                        >
                          {position.map((val, index) => (
                            <option key={index}>{val}</option>
                          ))}
                        </select>
                        <p className="error">
                          {error.position && error.position}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <h2 className="text-base mt-4">
                    <span>{step}</span> of 2
                  </h2>
                  {step > 1 ? (
                    <button
                      onClick={submit}
                      className="flex text-white font-bold py-2 px-2 rounded button"
                    >
                      <span>Submit</span>
                    </button>
                  ) : (
                    <button
                      onClick={next}
                      className="flex text-white font-bold py-2 px-2 rounded button"
                    >
                      <span>Next</span>{" "}
                      <Image
                        width={"10px"}
                        height={"10px"}
                        src={Arrow}
                        alt="arrow"
                        className="ml-1 justify-center flex my-auto"
                      />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-xl semibold text-center mt-4">
                  Thank you for your interest
                </h1>
                <h2 className="text-base text-center mt-2">
                  We will get back to you shortly
                </h2>
                <div className="mx-auto p-4">
                  <Image className="mx-auto img" alt="lock" src={LockAndKey} />
                </div>
                <a href='/'>
                  <button className="flex text-white font-bold py-2 px-2 rounded button1 mx-auto">
                    <span>Take me back Home</span>
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;