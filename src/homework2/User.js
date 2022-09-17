
function Launch(props) {
    let {launch:launch} = props
    return (
        <div>

           <h3>{launch.mission_name}----{launch.launch_year}</h3>
            <img src= {launch.links.mission_patch_small}/>

        </div>
    );
}

export default Launch;