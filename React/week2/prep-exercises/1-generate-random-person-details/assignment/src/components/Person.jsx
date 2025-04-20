function Person({person}) {
  if (!person) {
    return null
  };

  return (
    <div>
      <ul style={{listStyle: "none"}}>
        <li>First Name: {person.first_name}</li>
        <li>Last Name: {person.last_name}</li>
        <li>Email: {person.email}</li>
      </ul>
    </div>
  );
};

export default Person;