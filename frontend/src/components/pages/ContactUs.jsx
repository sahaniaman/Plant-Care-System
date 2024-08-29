import React from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="w-full h-custom  flex flex-col items-center py-4 gap-4">
        <h1 className="text-[#142F38] text-5xl font-semibold ">Contact Us</h1>
        <h2 className="text-[#717171] text-3xl font-poppins">
          Any question or remarks? Just write us a message!
        </h2>
        <div className="h-[80%] w-[80%] bg-white rounded-2xl flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full items-center justify-center p-4"
          >
            <div className="flex w-[50%] gap-4">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className="border-b-2 border-black p-2 outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="flex flex-col w-[50%]">
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className="border-b-2 border-black p-2 outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="flex gap-4 w-[50%]">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="border-b-2 border-black p-2 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col w-[50%]">
                <label htmlFor="phoneNumber" className="font-semibold">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                  })}
                  className="border-b-2 border-black p-2 outline-none"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
            <fieldset className="flex flex-col   w-[50%]  gap-4 ">
              <h2 className="font-semibold ">Select Subject</h2>
              <div className="flex gap-10  items-center">
                <label>
                  <input
                    type="radio"
                    value="generalInquiry"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="mr-2"
                  />
                  General Inquiry
                </label>
                <label>
                  <input
                    type="radio"
                    value="feedback"
                    {...register("subject")}
                    className="mr-2"
                  />
                  Feedback
                </label>
                <label>
                  <input
                    type="radio"
                    value="complain"
                    {...register("subject")}
                    className="mr-2"
                  />
                  Complain
                </label>
              </div>
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </fieldset>

            <div className="flex flex-col w-[50%] h-20">
              <label htmlFor="message" className="font-semibold ">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="border-b p-2 resize-none overflow-x-hidden"
                style={{ height: "300px", width: "80%" }} // Adjust the height as needed
                placeholder="Write your message..."
              />

              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="bg-[#142F38] text-white p-2  rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
