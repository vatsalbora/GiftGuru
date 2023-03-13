import React, { useState, useEffect } from "react";
import client from "../db.js";

function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function getProfiles() {
      await client.connect();
      const result = await client.query("SELECT * FROM profiles");
      setProfiles(result.rows);
      await client.end();
    }

    getProfiles();
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} ({profile.age}) ({profile.gender}) ({profile.budget})
            ({profile.pinterest})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profiles;
