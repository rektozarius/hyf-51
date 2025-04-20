import { useEffect, useState } from 'react';
import Person from "./Person";

function PersonController() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await fetch('https://www.randomuser.me/api?results=1');
        const data = await response.json();

        const newPerson = {
          first_name: data.results[0].name.first,
          last_name: data.results[0].name.last,
          email: data.results[0].email
        };
        setPerson(newPerson);
    
      } catch(err) {
        console.error(err);
      };
    };
    getPerson();
  }, []);

  return (
    <Person person={person}/>
  );
};

export default PersonController;