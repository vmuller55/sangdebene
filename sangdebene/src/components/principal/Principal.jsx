import Background from '../../assets/images/local.webp'
import InfoBox from '../box/InfoBox';

import './principal.css'



function Principal(){
    return(
        <div>
            <img src={Background} alt='local' className='background'></img>
            <InfoBox></InfoBox>
        </div>
    )
}

export default Principal;