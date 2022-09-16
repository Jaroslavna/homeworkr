
function Character(props) {
    let {charaсter}=props;
    return (
        <div>
            <h3>{charaсter.id}---{charaсter.name}</h3>
            <p>{charaсter.status}</p>
        </div>
    );
}

export default Character;
