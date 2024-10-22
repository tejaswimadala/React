import React, { useState } from "react";
import ListCard from "./ListCard"; // Adjust the path as necessary

const ProfileForm = ({ addProfile }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    addProfile(formData);
    setFormData({ name: "", age: "", occupation: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        placeholder="Occupation"
        required
      />
      <button type="submit">Add Profile</button>
    </form>
  );
};

const Profiles = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Alice", age: 38, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 38, occupation: "Doctor" },
    { id: 3, name: "Charlie", age: 25, occupation: "Artist" }
  ]);

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => [
      ...prevProfiles,
      { id: prevProfiles.length + 1, ...newProfile }
    ]);
  };

  return (
    <div className="profiles">
      <ProfileForm addProfile={addProfile} />
      <div className="profile-cards">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>
    </div>
  );
};

export default Profiles;

// ListCard.js
import React from "react";

const ListCard = ({ data }) => {
  return (
    <div className="list-card">
      <h3>{data.name}</h3>
      <p>Age: {data.age}</p>
      <p>Occupation: {data.occupation}</p>
    </div>
  );
};

export default ListCard;