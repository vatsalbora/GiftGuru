import React from "react";
import './home.css';

function Home() {
    return (
        <div className="Home">
            <h1>GiftGuru</h1>
            <form>
                <input name="firstName" placeholder="First name" required />
                <input name="lastName" placeholder="Last name" required />
                <input type="submit" value="Submit" />
            </form>
        </div> 
    );
}

export default Home;