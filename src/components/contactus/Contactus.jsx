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
import Vector from "../../assets/vector.png";
import { SendMailClient } from "zeptomail";
import Select from "react-select";
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
  const customStyles = {
    control: (base) => ({
      ...base,
      border: "none", // Customize border color
      borderRadius: "0.375rem", // Customize border radius
      padding: "0.125rem", // Customize padding
      boxShadow: "none", // Remove default shadow
      backgroundColor: "white",
      outline: "none",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#A0AEC0", // Customize placeholder text color
    }),
    singleValue: (base) => ({
      ...base,
      color: "#4A5568", // Customize selected option color
    }),
    menu: (base) => ({
      ...base,
      position: 'absolute',
      zIndex: 1000,
      backgroundColor: "#FFFFFF", // Customize dropdown background color
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      borderBottom: `0.6px solid #E8E1DB`,
      "&:last-of-type": {
      borderBottom: "none",
    },
      width: "calc(100%-16px)",
      margin: "4px 8px 4px 8px",
      backgroundColor: isSelected
        ? "#FFFFFF"
        : isFocused
        ? "#E8E1DB4D"
        : "#FFFFFF", // Colors for selection and focus
      color: isSelected ? "#4A5568" : "#4A5568", // Text color for selected and focused
      "&:active": {
        backgroundColor: "#E8E1DB4D", // Customize color when clicking
        
        // "&:last-of-type": {
        //   borderBottom: "none", // Remove border from the last option if desired
        // },
      },
    }),
    // option: (base) => ({
    //   ...base,
    //   border: `1px dotted black`,
    //   height: '100%',
    // }),
  };
  const url = "api.zeptomail.in/";
  const token =
    "Zoho-enczapikey PHtE6r0IF+7u2TUo+hRW4KftFsGkN9srrr81eAhAt4gRWacAGk0BrdkvkGXkqU0iXPZBEfefy4JrsLqV4uOGIG+5Y2xOWGqyqK3sx/VYSPOZsbq6x00YsVQTcEXaVYLuddZo0yHRudjdNA==";

  let client = new SendMailClient({ url, token });

  function validate1() {
    const newErrors = {};

    // Validate name
    if (!data.name?.length) {
      newErrors.name = "Please fill your name";
    }

    // Validate email
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please fill your email";
    } else {
      const [username, domain] = data.email.split("@");

      // Validate that the domain is not "gmail.com"
      if (domain?.toLowerCase() === "gmail.com") {
        newErrors.email =
          "Please enter your work email address (e.g., name@company.com)";
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

  const saveData = async () => {
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

      try {
        client
          .sendMail({
            from: {
              address: "noreply@yourekai.com",
              name: "ekai-notification",
            },
            to: [
              {
                email_address: {
                  address: "gtmadmin@yourekai.com",
                },
              },
            ],
            subject: "lead from website",
            htmlbody: `<div><b><h3>User details are:</h3> 
                      <h4>Email: ${data.email}</h4>
                      <h4>Name: ${data.name}</h4>
                      <h4>Heard About: ${data.hearAbout}</h4>
                      <h4>Organization Size: ${data.organizationSize}</h4>
                      <h4>Position: ${data.position}</h4>
                      <h4>Work Type: ${data.workType}</h4>
                      </b>
                    </div>`,
          })
          .then((resp) => console.log("success"))
          .catch((error) => console.log("error"));

        return true;
      } catch (error) {
        console.error("Error sending mail:", error);
      }
    } catch (error) {
      console.error("Error adding document:", error);
      return error;
    }
  };

  // "address": "gtmadmin@yourekai.com",
  // "address": "sonkariamayank@gmail.com",
  const submit = async () => {
    if (validate2()) {
      const response = await saveData();
      if (response === true) {
        await setSubmitted(true);
      } else {
        console.log("Error response:", response);
      }
    }
  };

  console.log("userData: ", data);
  const hearAbout = [
    { label: "Search Engine", value: "Search Engine" },
    { label: "LinkedIn", value: "LinkedIn" },
    { label: "Friend or Family", value: "Friend or Family" },
    { label: "Email Marketing", value: "Email Marketing" },
    { label: "Event or Conference", value: "Event or Conference" },
    { label: "Other", value: "Other" },
  ];
  const workType = [
    { label: "Software Development", value: "Software Development" },
    { label: "Data Analysis", value: "Data Analysis" },
    { label: "Project Management", value: "Project Management" },
    { label: "Sales/Marketing", value: "Sales/Marketing" },
    { label: "HR/Admin", value: "HR/Admin" },
  ];
  const size = [
    { label: "0-50", value: "0-50" },
    { label: "50-500", value: "50-500" },
    { label: "501-5000", value: "501-5000" },
    { label: ">5000", value: ">5000" },
    { label: "Individual Contributer", value: "Individual Contributer" },
  ];
  const position = [
    { label: "Senior Management", value: "Senior Management" },
    { label: "Manager", value: "Manager" },
    { label: "Individual Contributer", value: "Individual Contributer" },
  ];
  if (!isvisible) return null;
  return (
    <div className="outerdiv w-full flex justify-center py-20">
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
                      <div className="mb-2 mt-3">
                        <label
                          className="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 outlinem"
                          placeholder="Insert your name"
                          value={data.name}
                          onChange={(e) =>
                            setData({
                              ...data,
                              name: e.target.value,
                            })
                          }
                        />
                        {error.name && (
                          <p className="error">
                            <Image
                              loading="eager"
                              priority={true}
                              src={Vector}
                              alt="vector"
                              style={{
                                width: "12px",
                                height: "12px",
                                margin: "2px",
                              }}
                            />{" "}
                            <p>{error.name}</p>{" "}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 mt-3">
                        <label
                          className="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          Work Email
                        </label>
                        <input
                          type="email"
                          className=" border rounded  w-full py-2 px-3 text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 outlinem"
                          placeholder="Insert your mail address"
                          value={data.email}
                          onChange={(e) =>
                            setData({
                              ...data,
                              email: e.target.value,
                            })
                          }
                        />
                        {error.email && (
                          <p className="error">
                            <Image
                              loading="eager"
                              priority={true}
                              src={Vector}
                              alt="vector"
                              style={{
                                width: "12px",
                                height: "12px",
                                margin: "2px",
                              }}
                            />{" "}
                            {error.email}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 mt-3">
                        <label
                          className="block text-gray-700 text-sm mb-2 ml-2"
                          htmlFor="username"
                        >
                          How did you hear about ekai?
                        </label>
                        <div>
                          <Select
                            styles={customStyles}
                            components={{ IndicatorSeparator: () => null }}
                            placeholder="Select"
                            className="basic-single border rounded w-full text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 outlinem"
                            value={data.hearAbout}
                            onChange={(value) =>
                              setData({ ...data, hearAbout: value })
                            }
                            options={hearAbout}
                          />
                        </div>
                        {error.hearAbout && (
                          <p className="error">
                            <Image
                              loading="eager"
                              priority={true}
                              src={Vector}
                              alt="vector"
                              style={{
                                width: "12px",
                                height: "12px",
                                margin: "2px",
                              }}
                            />{" "}
                            {error.hearAbout}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-2 mt-3">
                        <label
                          className="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          What type of work do you do?
                        </label>

                        <Select
                          styles={customStyles}
                          components={{ IndicatorSeparator: () => null }}
                          placeholder="Select"
                          className="basic-single border rounded w-full text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 outlinem"
                          value={data.workType}
                          onChange={(value) =>
                            setData({ ...data, workType: value })
                          }
                          options={workType}
                        />
                        {error.workType && (
                          <p className="error">
                            <Image
                              loading="eager"
                              priority={true}
                              src={Vector}
                              alt="vector"
                              style={{
                                width: "12px",
                                height: "12px",
                                margin: "2px",
                              }}
                            />{" "}
                            {error.workType}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 mt-3">
                        <label
                          className="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          What is the size of your organization?
                        </label>
                        <Select
                          styles={customStyles}
                          components={{ IndicatorSeparator: () => null }}
                          placeholder="Select"
                          className="basic-single border rounded w-full text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 outlinem"
                          value={data.organizationSize}
                          onChange={(value) =>
                            setData({ ...data, organizationSize: value })
                          }
                          options={size}
                        />
                        {error.organizationSize && (
                          <p className="error">
                            <Image
                              loading="eager"
                              priority={true}
                              src={Vector}
                              alt="vector"
                              style={{
                                width: "12px",
                                height: "12px",
                                margin: "2px",
                              }}
                            />{" "}
                            {error.organizationSize}
                          </p>
                        )}
                      </div>
                      <div className="mb-2 mt-3">
                        <label
                          className="block text-gray-700 text-sm  mb-2 ml-2"
                          for="username"
                        >
                          What is your current position within the organization?
                        </label>
                        <Select
                          styles={customStyles}
                          components={{ IndicatorSeparator: () => null }}
                          placeholder="Select"
                          className="basic-single border rounded w-full text-gray-700 focus:shadow-outline active:shadow-lg active:border-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 outlinem"
                          value={data.position}
                          onChange={(value) =>
                            setData({ ...data, position: value })
                          }
                          options={position}
                        />
                        {error.position && (
                          <p className="error">
                            <Image
                              loading="eager"
                              priority={true}
                              src={Vector}
                              alt="vector"
                              style={{
                                width: "12px",
                                height: "12px",
                                margin: "2px",
                              }}
                            />{" "}
                            {error.position}
                          </p>
                        )}
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
                        loading="eager"
                        priority={true}
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
                  <Image
                    loading="eager"
                    priority={true}
                    className="mx-auto img"
                    alt="lock"
                    src={LockAndKey}
                  />
                </div>
                <a href="/">
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
