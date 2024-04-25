// import React from 'react';  not required in latest version of react
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormState } from "../hooks/useFormState";
import { addUser } from "../store";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  const { formState, setFormValue } = useFormState({
    name: "",
    email: "",
    address: "",
    language: "",
  });
  const { name, email, address, language } = formState;
  // const [userList, setUserList] = useState([]);
  const userList = state;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailPattern.test(email);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) alert("Name is required");
    if (email.length === 0) alert("Email is required");
    if (name.length < 3 || name.length > 30)
      alert("Name should have atleast 3 and max 30 characters only");

    if (!isEmailValid) alert("Enter valid email");

    if (
      name.length !== 0 &&
      email.length !== 0 &&
      name.length > 2 &&
      name.length < 31 &&
      isEmailValid
    ) {
      // setUserList(userList.concat({ name, email, address, language }));
      dispatch(addUser({ name, email, address, language }));
    }
  };

  return (
    <div>
      <h1> Assignment on React component, form handling, custom hook </h1>
      <div className="flex">
        <div className="container">
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setFormValue("name", e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setFormValue("email", e.target.value)}
                formNoValidate="formnovalidate"
              ></input>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <textarea
                htmlFor="address"
                value={address}
                onChange={(e) => setFormValue("address", e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="language">Choose Language:</label>
              <select
                name="language"
                id="language"
                value={language}
                onChange={(e) => setFormValue("language", e.target.value)}
              >
                <option value=""></option>
                <option value="hindi">English</option>
                <option value="hindi">Hindi</option>
                <option value="marathi">Marathi</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={name.length === 0 && email.length === 0}
            >
              Submit
            </button>
          </form>
        </div>
        <div style={{ width: "50%" }}>
          <h2>User List</h2>
          <br />
          <div className="userDetailsHeader">
            <p>User Name</p>
            <p>Email</p>
            <p>Address</p>
            <p>Language</p>
          </div>
          <div>
            {userList.map((item, index) => (
              <div key={`user-${index}`} className="userDetails">
                {Object.keys(item).map((key, index) => (
                  <p key={`prop-${index}`}>{item[key]}</p>
                ))}
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
