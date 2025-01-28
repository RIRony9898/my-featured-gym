import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";


const Features = () => {
    const [features, setFeatures] = useState([])

    useEffect(() => {
    fetch('/features.json')
    .then(response => response.json())
    .then(data=> setFeatures(data))
    }, [])
    return (
        <div className="grid md:grid-cols-3 gap-4 m-5">
            {
                features.map(feature=> <Feature key={feature.id} feature={feature}/>)
            }
        </div>
    );
};

export default Features;