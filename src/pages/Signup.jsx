import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utilis/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
  const [selectedFile, setSelectedFfile] = useState(null);
  const [previewURl, setPreviewURl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
    parkingName: '',
    slotsAvailable: '',
  });

  const isOwner = formData.role === 'doctor';

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {


    const file = event.target.files[0];
    //Later we will use cloudnary to upload images

    const data = await uploadImageToCloudinary(file);

    setPreviewURl(data.url);
    setSelectedFfile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ---img---bo */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* -----signup form---- */}

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an
              <span className="text-primaryColor"> account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                  placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                {/* <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a :
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4
                  py-3 focus:outline-none"
                  >
                    <option value="patient">User</option>
                    <option value="doctor">Owner</option>
                  </select>
                </label> */}

<label className="text-headingColor font-bold text-[16px] leading-7">
          Are you a :
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
          >
            <option value="patient">User</option>
            <option value="doctor">Owner</option>
          </select>
        </label>

        {isOwner && (
        <div>
          <label htmlFor="parkingName"></label>
          <input
            type="text"
            id="parkingName"
            name="parkingName"
            value={formData.parkingName}
            placeholder="Parking Area Name"
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
            placeholder:text-textColor rounded-md cursor-pointer"
          />
          <br />

          <label htmlFor="slotsAvailable"></label>
          <input
            type="text"
            id="slotsAvailable"
            name="slotsAvailable"
            value={formData.slotsAvailable}
            onChange={handleInputChange}
            placeholder="Total Slots"
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
            placeholder:text-textColor rounded-md cursor-pointer"
          />
          <br />
        </div>
      )}
 


                

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender :
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4
                  py-5 focus:outline-none"
                    required
                  >
                    <option value="">select</option>
                    <option value="male">male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure
                    className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor 
                flex items-center justify-center"
                  >
                    <img
                      // src={avatar} className="w-full rounded-full"
                      src={previewURl}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex 
                   items-center px-[0.75rem] py-[0.37rem] text-[15px] leading-6 overflow-hidden 
                   bg-[#0066ff46] text=headingColor font-semibold rounded-lg truncate cursor-pointer hover:bg-primaryColor hover:text-white"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-blue-800"
                >
                  {loading ? <HashLoader size={35} color="#fffff" /> : "SignUp"}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account
                <Link
                  to="/Login"
                  className="text-primaryColor font-medium 
                  ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
