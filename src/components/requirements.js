import React from "react";
import './requirements.css';

function Requirements() {
  return (
    <div className="Requirements">
        <h1>PresentPro</h1>
        <form>
            <input name="name" placeholder="Recepient's Name" required />
            <input name="age" placeholder="Recepient's Age" required />
            <input name="relationship" placeholder="What is your relationship with the recepient?" required />
            <input name="ocassion" placeholder="What is the ocassion?" required />
            <input name="budget" placeholder="What is your budget?" required />
            <input name="pinterest" placeholder="Link to the recepient's Pinterest profile? (if applicable)" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default Requirements;