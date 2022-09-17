import {useEffect, useState} from "react";
import Launch from "./User";




function Launches() {
    let [launches, setLaunches] = useState([]);





useEffect(()=> {


    fetch('https://api.spacexdata.com/v3/launches')
        .then(value => value.json())
        .then(value => {
            setLaunches(value.filter((value) => value.launch_year !== '2020'))

        });
},[]);


    return (
        <div>

            {
                launches.map(launch =>
            <
                Launch key={launch.flight_number}
                launch={launch}

            />
            )
            }
        </div>
    );
}

export default Launches;