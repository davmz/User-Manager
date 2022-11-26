/**
 * Returns the User List Component.
 *
 * @returns The User List Component.
 */
const UserList = ({ users }) => {
    return (
        <>
            <div>
                {/* Loop through object and pass values to another child component */}
                <p>{users[0].username} {users[0].age}</p>
            </div>
        </>
    );
}

export default UserList;