/**
 * Returns the Add User Form Component.
 *
 * @returns The Add User Form Component.
 */
const AddUser = () => {
    return (
        <>
            <div>
                <form>
                    <label>Username</label>
                    <input type="text" />

                    <label>Age (Years)</label>
                    <input type="number" />

                    <button>Add User</button>
                </form>
            </div>
        </>
    );
}

export default AddUser;