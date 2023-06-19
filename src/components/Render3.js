import { useLocation } from "react-router-dom";
const Render3 = () => {
    const location = useLocation();
    return (
        <>
        <h4 style = {{paddingTop:'70px'}}>Render-3 Appeared</h4>
        {location.state ? <h3>{location.state.passProp}</h3>: <></>}
        </>
    )
}
export default Render3;