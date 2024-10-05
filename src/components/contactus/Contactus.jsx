import React from "react";
import Logo from "../../assets/ekai-logo.svg";
import Image from "next/image";
import "./styles.scss";
import { IoClose } from "react-icons/io5";
import Arrow from "../../assets/ArrowRight.svg";
import { Button, Input, Select } from "@nextui-org/react";
const Contactus = ({ isvisible }) => {
  if (!isvisible) return null;
  return (
    <div className="outerdiv w-full flex justify-center p-20">
      <div className="md:w-1/2 sm:w-full lg:w-1/3 ">
        <div>
          <div className="flex justify-center">
            <Image
              className="img "
              width={"40px"}
              height={"125px"}
              src={Logo}
              alt="logo-nav"
            />
          </div>

          <div className="innerdiv">
            <div className="flex justify-between">
              <h3 className="textintro text-2xl">Let us get to know you</h3>
              <IoClose size={38} />
            </div>
            <div className="content py-10">
              <div className="my-2">
              <label class="block text-gray-700 text-sm  mb-2 ml-2" for="username">Full Name</label>
                <input
                  type="text"
                  className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline"
                  placeholder="Insert your name"
                />
              </div>
              <div className="my-2">
              <label class="block text-gray-700 text-sm  mb-2 ml-2" for="username">Work Email</label>
                <input
                  type="email"
                  className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline"
                  placeholder="Insert your mail address"
                />
              </div>
              <div className="my-2">
              <label class="block text-gray-700 text-sm  mb-2 ml-2" for="username">How did you hear about ekai?</label>
                <select
                  className=" border rounded w-full py-2 px-3 text-gray-700 focus:shadow-outline"
                  value={""}
                >
                    <option>Select</option>
                    <option>hi</option>
                </select>
              </div>
              
            </div>
            <div className="flex justify-between">
                <h2 className="text-sm mt-4">1 of 2</h2>
                <button className="flex text-white font-bold py-2 px-2 rounded button">
                    <span>Next</span> <Image  width={"10px"} height={"10px"}  src={Arrow} alt="arrow"  className="ml-1 justify-center flex my-auto"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
