import { useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import nxpLogo from '../Assets/NXP_Logo.png'
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const changeNavigation = (page) => {
        navigate(`/${page}`,{state:{passProp: "Calling from this page"}} )
    }
    return (
        <div className='main sticky'>
            <div className='subComponent1'>
                <Icon.ArrowLeftCircleFill size="20px" />
                <img src = {nxpLogo} className='imgSrc'/>
            </div>
            <div className='subComponent2'>
                <button onClick={()=> changeNavigation('render1')}>Render-1</button>
                <button onClick={()=> changeNavigation('render2')}>Render-2</button>
                <button onClick={()=> changeNavigation('render3')}>Render-3</button>
            </div>
        </div>
    )
}

export default Header;