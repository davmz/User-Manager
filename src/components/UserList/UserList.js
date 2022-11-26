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
                    <p key={`${user.username} ${user.age}`} >
                        {user.username} ({user.age} {user.age > 1 ? 'years' : 'year'} old)
                    </p>
                ))}
            </ul>
        </>
    );
}

export default UserList;