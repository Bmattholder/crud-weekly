import axios from 'axios';
import React, { useState } from 'react';

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

  const onChange = (e) => {
    if (e.target.name === 'praenomens') {
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

  const onSubmit = async (e, id) => {
    e.preventDefault();

    await axios.patch(
      `http://localhost:8080/api/v1/people/${id}`,
      editingPerson
    );
    refresh();
    setEditMode(false);
  };

  const cancelHandler = () => {
    setEditMode(!editMode);
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

  const { praenomens, cognomen, number, street, city, state, zip } =
    editingPerson;

  const onDelete = async (e, id) => {
    e.preventDefault();

    await axios.delete(`http://localhost:8080/api/v1/people/${id}`);
    refresh();
  };

  return (
    <>
      {!editMode ? (
        <>
          <h1>
            {praenomens} {cognomen}
          </h1>
          <p>
            {number} {street} {city} {state} {zip}
          </p>
          <button onClick={() => setEditMode(!editMode)}>Edit</button>
          <button onClick={(e) => onDelete(e, id)}>Delete</button>
        </>
      ) : (
        <>
          <form onSubmit={(e) => onSubmit(e, id)}>
            <input
              type='text'
              name='praenomens'
              id='praenomens'
              onChange={onChange}
              value={praenomens}
              placeholder='Praenomens'
              required
            />
            <input
              type='text'
              name='cognomen'
              id='cognomen'
              onChange={onChange}
              value={cognomen}
              placeholder='Cognomen'
              required
            />
            <input
              type='text'
              name='number'
              id='number'
              onChange={onChange}
              value={number}
              placeholder='Number'
              required
            />
            <input
              type='text'
              name='street'
              id='street'
              onChange={onChange}
              value={street}
              placeholder='Street'
              required
            />
            <input
              type='text'
              name='city'
              id='city'
              onChange={onChange}
              value={city}
              placeholder='City'
              required
            />
            <input
              type='text'
              name='state'
              id='state'
              onChange={onChange}
              value={state}
              placeholder='State'
              required
            />
            <input
              type='text'
              name='zip'
              id='zip'
              onChange={onChange}
              value={zip}
              placeholder='Zip'
              required
            />
            <button>Submit</button>
            <button onClick={cancelHandler}>Cancel</button>
          </form>
        </>
      )}
    </>
  );
}

export default Person;
