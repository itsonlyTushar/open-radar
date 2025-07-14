import React, { useState } from "react";
import Input from "../components/UI/Input";
import emailjs from "@emailjs/browser";
import { ImSpinner2 } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const tempateParam = {
        name: name,
        subject: subject,
        number: number,
        email: email,
        description: description,
      };
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        tempateParam,
        import.meta.env.VITE_PUBLIC_ID
      );

      setDescription("");
      setEmail("");
      setName("");
      setNumber("");
      setSubject("");
    } catch (error) {
      console.error("Error while sending mail...", error.message);
    } finally {
      setIsLoading(false);
      toast.success('Mail Sent!')
    }
  };

  const inputFields = [
    {
      id: 1,
      value: name,
      name: "name",
      type: "text",
      labelText: "Your Name",
      onChange: (e) => setName(e.target.value),
    },
    {
      id: 2,
      value: email,
      name: "email",
      type: "email",
      labelText: "Your Email",
      onChange: (e) => setEmail(e.target.value),
    },

    {
      id: 3,
      value: number,
      name: "contact",
      type: "number",
      labelText: "Your Contact",
      onChange: (e) => setNumber(e.target.value),
    },
    {
      id: 4,
      value: subject,
      name: "subject",
      type: "text",
      labelText: "Title",
      onChange: (e) => setSubject(e.target.value),
    },
    {
      id: 5,
      value: description,
      name: "description",
      type: "description",
      labelText: "How can I help?",
      onChange: (e) => setDescription(e.target.value),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Discover Open Source Projects</title>
        <meta
          name="description"
          content="OpenRadar helps web developers discover trending open source projects, first issues, and learning resources."
        />
        <meta
          name="keywords"
          content="javascript, begineer projects, web dev projects, trending github projects, contribute, first issue, web development, mern stack"
        />
      </Helmet>
      <Toaster />
      <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border border-black pt-16">
        <div className="">
          <img
            className="border border-r-black object-cover"
            src="https://res.cloudinary.com/dartdvch1/image/upload/v1750586184/contact_kinnxz.png"
            alt="contact"
          />
        </div>

        <div className="flex flex-col items-center w-full">
          <h3 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold pt-6 text-center">
            Contact Us
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 w-4/5"
          >
            {inputFields.map((input) => (
              <Input
                value={input.value}
                key={input.id}
                type={input.type}
                onChange={input.onChange}
                name={input.name}
                labelText={input.labelText}
              />
            ))}

            <button
              type="submit"
              className="py-4 px-6 my-4 bg-black rounded-md text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
            >
              {isLoading ? (
                <div className="text-center flex items-center justify-center">
                  <ImSpinner2 className={`animate-spin text-3xl`} />
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
