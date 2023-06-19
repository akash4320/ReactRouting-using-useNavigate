import { useLocation } from "react-router-dom";
const Render2 = () => {
    const location = useLocation();
    return (
        <>
        <h4 style = {{paddingTop:'70px'}}>Render-2 Appeared</h4>
        {location.state ? <h3>{location.state.passProp}</h3>: <></>}
        </>
    )
}
export default Render2;