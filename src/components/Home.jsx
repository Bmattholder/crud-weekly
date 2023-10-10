// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Person from './Person';

// function Home() {
//   const [peopleList, setPeopleList] = useState([]);
//   const [toggle, setToggle] = useState(false);

//   const toggleHelper = () => {
//     setToggle(!toggle);
//   };

//   useEffect(() => {
//     const getPeople = async () => {
//       const res = await axios.get('http://localhost:8080/api/v1/people');
//       const data = res.data;
//       setPeopleList(data.content);
//     };
//     getPeople();
//   }, [toggle]);

//   return (
//     <>
//       {peopleList.map((person) => {
//         return (
//           <Person
//             key={person.id}
//             id={person.id}
//             firstName={person.personalName.givenNames[0].value}
// 						lastName={person.personalName.surname.value}
// 						address={person.address}
// 						toggle={toggleHelper}
//           />
//         );
//       })}
//     </>
//   );
// }

// export default Home;
