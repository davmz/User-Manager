import UserCard from "./UserCard";

/**
 * Returns the User List Component.
 *
 * @returns The User List Component.
 */
const UserList = ({ users }) => {
    return (
        <>
            <ul>
                {/* Loop through object and pass values to another child component */}
                {users.map((user) => (
                    <UserCard
                        age={user.age}
                        username={user.username}
                        key={`${user.username} ${user.age}`}
                    />
                ))}
            </ul>
        </>
    );
}

export default UserList;