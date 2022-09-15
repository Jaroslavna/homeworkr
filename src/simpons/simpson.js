function Simpson(props){
    let {simpson}=props;
    return (
        <div>
<h3>{simpson.name}---{simpson.surname}</h3>
            <p>{simpson.age}</p>
            <h3>{simpson.info}</h3>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>

    );

}

export default Simpson;