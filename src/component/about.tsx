
import { useLocation } from "react-router"

const About = () => {
    const location = useLocation()
    console.log(location);

    return (<>
        <h1>About❓</h1>
        
    </>)
}

export default About