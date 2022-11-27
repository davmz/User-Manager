import Card from "../UI/Card";

import classes from "./UserList.module.css";

/**
 * Returns the User List Component.
 *
 * @returns The User List Component.
 */
const UserList = ({ users }) => {
    return (
        <>
            <Card className={classes.users}>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.age} year{user.age > 1 ? 's' : ''} old)
                        </li>
                    ))} 
                </ul>
            </Card>  
        </>
    );
}

export default UserList;