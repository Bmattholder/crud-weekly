import React, { useEffect, useState } from "react";
import axios from "axios";
import Person from "./Person";

function PeopleList(props) {
  const [peopleList, setPeopleList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/people");
      const data = res.data;
      setPeopleList(data.content);
    };
    getData();
  }, [refresh]);

  const refreshHelper = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      {peopleList.map((person) => {
        return (
          <Person
            key={person.id}
            id={person.id}
            firstName={person.personalName.givenNames[0].value}
            lastName={person.personalName.surname.value}
            address={person.address}
            refresh={refreshHelper}
          />
        );
      })}
    </>
  );
}

export default PeopleList;
