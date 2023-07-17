import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function New(props) {
  const [formData, setFormData] = useState({
    praenomens: [],
    cognomen: "",
    number: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const { praenomens, cognomen, number, street, city, state, zip } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "praenomens") {
      setFormData((p) => ({
        ...p,
        [e.target.name]: e.target.value.split(),
      }));
    } else {
      setFormData((p) => ({
        ...p,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:8080/api/v1/people",
      formData
    );
    console.log(res);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="praenomens"
        id="praenomens"
        onChange={onChange}
        value={praenomens}
        placeholder="Praenomens"
        required
      />
      <input
        type="text"
        name="cognomen"
        id="cognomen"
        onChange={onChange}
        value={cognomen}
        placeholder="Cognomen"
        required
      />
      <input
        type="text"
        name="number"
        id="number"
        onChange={onChange}
        value={number}
        placeholder="Number"
        required
      />
      <input
        type="text"
        name="street"
        id="street"
        onChange={onChange}
        value={street}
        placeholder="Street"
        required
      />
      <input
        type="text"
        name="city"
        id="city"
        onChange={onChange}
        value={city}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="state"
        id="state"
        onChange={onChange}
        value={state}
        placeholder="State"
        required
      />
      <input
        type="text"
        name="zip"
        id="zip"
        onChange={onChange}
        value={zip}
        placeholder="Zip"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default New;
