import React, { useState } from "react";
import axios from "axios";

function Person({ id, firstName, lastName, address, refresh }) {
  const [editMode, setEditMode] = useState(false);
  const [editingPerson, setEditingPerson] = useState({
    praenomens: [firstName],
    cognomen: lastName,
    number: address.number,
    street: address.street,
    city: address.city,
    state: address.state,
    zip: address.zip,
  });

  const { praenomens, cognomen, number, street, city, state, zip } =
    editingPerson;

  const onChange = (e) => {
    if (e.target.name === "praenomens") {
      setEditingPerson((p) => ({
        ...p,
        [e.target.name]: e.target.value.split(),
      }));
    } else {
      setEditingPerson((p) => ({
        ...p,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onEditSubmit = async (e, id) => {
    e.preventDefault();

    const res = axios.patch(
      `http://localhost:8080/api/v1/people/${id}`,
      editingPerson
    );
    console.log(res);
    refresh();
    setEditMode(false);
  };

  const cancelHandler = () => {
    setEditMode(false);
    setEditingPerson({
      praenomens: [firstName],
      cognomen: lastName,
      number: address.number,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
    });
  };

  const deleteHandler = async (e, id) => {
    e.preventDefault();

    const res = await axios.delete("http://localhost:8080/api/v1/people/" + id);
    console.log(res);
    refresh();
  };

  return (
    <>
      {!editMode ? (
        <div>
          <h1>
            {id}: {firstName} {lastName}
          </h1>
          <p>
            {number} {street}
          </p>
          <p>
            {city} {state} {zip}
          </p>
          <button onClick={() => setEditMode(true)}>Edit</button>
          <button onClick={(e) => deleteHandler(e, id)}>Delete</button>
        </div>
      ) : (
        <form onSubmit={(e) => onEditSubmit(e, id)}>
          <input
            type="text"
            name="praenomens"
            id="praenomens"
            value={praenomens}
            onChange={onChange}
            placeholder="Praenomens"
            required
          />
          <input
            type="text"
            name="cognomen"
            id="cognomen"
            value={cognomen}
            onChange={onChange}
            placeholder="Cognomen"
            required
          />
          <input
            type="text"
            name="number"
            id="number"
            value={number}
            onChange={onChange}
            placeholder="Number"
            required
          />
          <input
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={onChange}
            placeholder="Street"
            required
          />
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={onChange}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="state"
            id="state"
            value={state}
            onChange={onChange}
            placeholder="State"
            required
          />
          <input
            type="text"
            name="zip"
            id="zip"
            value={zip}
            onChange={onChange}
            placeholder="Zip"
            required
          />
          <button>Submit Edit</button>
          <button onClick={cancelHandler}>Cancel</button>
        </form>
      )}
    </>
  );
}

export default Person;
