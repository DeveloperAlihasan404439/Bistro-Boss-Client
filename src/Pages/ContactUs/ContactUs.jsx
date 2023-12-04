import SectionCover from "../../Sheard/SectionCover/SectionCover";
import Title from "../../Sheard/Title/Title";
import { BiSolidPhoneCall, BiSolidLocationPlus, BiTime } from "react-icons/bi";
import message from "../../assets/others/message.svg";
import { Helmet } from "react-helmet";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
const ContactUs = () => {
  const [varefied, setVarefied] = useState(false);
  const validateCaptchaRef = useRef(null) 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const hendelMessage = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const message = target.message.value;
    console.log(name, email, phone, message);
  };
  const hendelValidation = () => {
    const value = validateCaptchaRef.current.value;
    if (validateCaptcha(value) == true) {
      setVarefied(true);
    }
    else  {
      setVarefied(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Contact us</title>
      </Helmet>
      <SectionCover
        imges="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.88923778.1699533654&semt=sph"
        title="CONTACT US"
        subTitle="Would you like to try a dish?"
      />
      <div className="w-11/12 mx-auto">
        <Title title="OUR LOCATION" single="Visit Us" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 md:mb-10">
          <div className="border-2 border-base-300">
            <span className="flex justify-center py-6 text-8xl bg-[#D1A054]">
              <BiSolidPhoneCall />
            </span>
            {/* <BiSolidLocationPlus/> */}
            <div className="mx-5 text-center bg-base-200 py-5 min-h-[200px] mb-5">
              <h1 className="text-6xl font-normal text-black">PHONE</h1>
              <p className="pb-5 pt-2 text-4xl">+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="border-2 border-base-300">
            <span className="flex justify-center py-6 text-8xl bg-[#D1A054]">
              <BiSolidLocationPlus />
            </span>
            <div className="mx-5 text-center bg-base-200 py-5 min-h-[200px] mb-5">
              <h1 className="text-6xl font-normal text-black">ADDRESS</h1>
              <p className="pb-5 pt-2 text-4xl">+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="border-2 border-base-300">
            <span className="flex justify-center py-6 text-8xl bg-[#D1A054]">
              <BiTime />
            </span>
            <div className="mx-5 text-center bg-base-200 py-5 min-h-[200px] mb-5">
              <h1 className="text-6xl font-normal text-black">WORKING HOURS</h1>
              <p className="pb-5 pt-2 text-4xl">
                Mon - Fri: 08:00 - 22:00 <br />
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
        <Title title="CONTACT FORM" single="Send Us a Message" />
        <div className="card flex-shrink-0 w-full max-w-3xl mx-auto mb-5 md:mb-10 shadow-2xl bg-[#F3F3F3]">
          <form onSubmit={hendelMessage} className="card-body">
            <div className="md:flex gap-5">
              <div className="form-control md:w-[50%]">
                <label className="label">
                  <span className="text-3xl font-normal text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input  w-full border-none outline-none"
                  required
                />
              </div>
              <div className="form-control md:w-[50%]">
                <label className="label">
                  <span className="text-3xl font-normal text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input  w-full border-none outline-none"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-3xl font-normal text-black">Phone</span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="phone"
                className="input  w-full border-none outline-none "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-3xl font-normal text-black">Message</span>
              </label>
              <textarea
                rows="5"
                cols="15"
                name="message"
                placeholder="enter your message"
                className="input  w-full border-none outline-none h-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <div className="flex w-fit items-center">
                <input
                  type="text"
                  ref={validateCaptchaRef}
                  placeholder="type the text above"
                  className="input outline-none rounded-r-none"
                />
              <button onClick={hendelValidation}
                className="bg-gradient-to-r from-[#835D23] to-[#D1A054] flex justify-center items-center gap-5 py-2 px-5 text-2xl text-white font-normal w-fit rounded-r-lg uppercase"
                >
                Varefied
              </button>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <div className={` flex justify-center items-center gap-5 py-2 px-5 text-2xl text-white font-normal w-fit rounded-lg ${varefied === true? 'bg-gradient-to-r from-[#835D23] to-[#D1A054]': 'bg-gradient-to-l from-[#4b2f06] to-[#e49d34]'}`}>
                <button className="uppercase" disabled={!varefied}>
                  Send Message
                </button>
                <img src={message} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
