/**
 * Returns the User Card Component.
 *
 * @returns The User Card Component.
 */
const UserCard = ({ username, age }) => {
    return (
        <>
            <div>
                <p>
                    {username} ({age} {age > 1 ? 'years' : 'year'} old)
                </p>
            </div>
        </>
    );
}

export default UserCard;