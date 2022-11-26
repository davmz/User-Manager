import { useState } from "react";

/**
 * Returns the Add User Form Component.
 *
 * @returns The Add User Form Component.
 */
const AddUser = ({ onSaveUserData }) => {
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState("");

    /**
     * Handles the onChange of username input.
     * 
     * @param {Form Input Handler Event} event 
     */
    const userAgeHandler = (event) => {
        setAge(event.target.value);

        // console.log(event.target.value, "AddUser.js");
    };

    /**
     * Handles the onChange of username input.
     * 
     * @param {Form Input Handler Event} event 
     */
    const userNameHandler = (event) => {
        setUsername(event.target.value);

        // console.log(event.target.value, "AddUser.js");
    };

    /**
     * Handles the form submission of adding a new user.
     * 
     * @param {Form Submit Handler Event} event 
     */
    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            username: username,
            age: age
        }

        onSaveUserData(userData);

        // console.log(`Name: ${username} Age: ${age}`, "AddUser.js");
    };

    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={userNameHandler}
                    />

                    <br />

                    <label>Age (Years)</label>
                    <input
                        min="1"
                        id="age"
                        name="age"
                        type="number"
                        onChange={userAgeHandler}
                    />

                    <br />

                    <button type="submit">Add User</button>
                </form>
            </div>
        </>
    );
}

export default AddUser;