import React, { useState, useEffect } from 'react'

function ListUser() {
    const [users, setUsers] = useState([]);
    const [serverMessage, setServerMessage] = useState("");


    useEffect(() => {
        ListOfUsers();
    }, [])

    const ListOfUsers = async () => {
        setServerMessage("načítám data");
        const data = await fetch("http://localhost:5000/get-users");
        const finalData = await data.json();
        const { msg, documents } = finalData;

        console.log(msg, documents)
        setUsers(documents);
        setServerMessage(msg);
    }

    return (
        <div>
            <p>List of registred users</p>
            <p>Now play: {users.length} players this game.</p>
            <ul className="ui list">
            {users.map((user, index) =>
                <li className="item" key={index}>{user.name}, {user.email}, {user.rasa}</li>
            )}
            </ul>
            <div className="msg">{serverMessage}</div>
        </div>
    )
}

export default ListUser;
