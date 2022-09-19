
function User(props)
{
    let {user:user, lift} = props
    return (
        <div>
           <h3> {user.id}----{user.name} </h3>
            <button onClick={ () => {
                lift(user);
            }}>
                Details
            </button>

        </div>
    );
}

export default User;