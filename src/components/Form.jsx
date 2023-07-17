import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form(props) {
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
        placeholder="Praenomens"
        value={praenomens}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="cognomen"
        id="cognomen"
        placeholder="Cognomen"
        value={cognomen}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="number"
        id="number"
        placeholder="Number"
        value={number}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="street"
        id="street"
        placeholder="Street"
        value={street}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="city"
        id="city"
        placeholder="City"
        value={city}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="state"
        id="state"
        placeholder="State"
        value={state}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="zip"
        id="zip"
        placeholder="Zip"
        value={zip}
        onChange={onChange}
        required
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
