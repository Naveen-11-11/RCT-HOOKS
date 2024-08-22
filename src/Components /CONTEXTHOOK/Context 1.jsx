import React, { createContext, useState } from 'react'
import Context2 from './Context 2';


export const UserContext = createContext();

const Context1 = () => {




    const [user, setUser] = useState("Naveen");

    const changeName = () => {
        setUser(user === "Naveen" ? "Kumar" : "Naveen")
    }

    const btntext = (user === "Naveen" ? "change to Kumar" : "change to Naveen")

    return (
        <div className='App'>

            <h1> useContext Hook </h1>

            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <button onClick={changeName}>{btntext}</button>

                <Context2 />
            </UserContext.Provider>
        </div>
    )
}

export default Context1;