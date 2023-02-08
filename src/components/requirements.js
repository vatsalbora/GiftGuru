import React from "react";
import './requirements.css';

function Requirements() {
  return (
    <div className="Requirements">
        <h1>GiftGuru</h1>
        <form>
            <input name="name" placeholder="Recepient's Name" required />
            <input name="age" placeholder="Recepient's Age" required />
            <input name="budget" placeholder="What is your budget?" required />
            <input name="pinterest" placeholder="Recepient's Pinterest profile link (if applicable)" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default Requirements;