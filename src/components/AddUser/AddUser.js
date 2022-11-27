import { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js"

import classes from "./AddUser.module.css";

/**
 * Returns the Add User Form Component.
 *
 * @returns The Add User Form Component.
 */
const AddUser = ({ onSaveUserData }) => {
    const [error, setError] = useState();

    const [age, setAge] = useState("");
    const [username, setUsername] = useState("");

    /**
     * Handles the form submission of adding a new user.
     * 
     * @param {Form Submit Handler Event} event 
     */
    const submitHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid input!",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }

        if (+age < 1) {
            setError({
                title: "Invalid input!",
                message: "Please enter a valid age (> 0)."
            })
            return;
        }

        onSaveUserData(username, age);
        
        setAge("");
        setUsername("");

        // console.log(`Name: ${username} Age: ${age}`, "AddUser.js");
    };

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
     * Handles the error modal to display.
     */
    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            <div>
                {error && (
                    <ErrorModal
                        title={error.title}
                        message={error.message}
                        onConfirm={errorHandler}
                    />
                )}

                <Card className={classes.input}>
                    <form onSubmit={submitHandler}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            autoFocus={true}
                            value={username}
                            onChange={userNameHandler}
                        />

                        <br />

                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            name="age"
                            value={age}
                            type="number"
                            onChange={userAgeHandler}
                        />

                        <br />

                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
            </div>
        </>
    );
}

export default AddUser;