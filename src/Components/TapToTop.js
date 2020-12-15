import React from 'react';
import {animateScroll as top} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp  } from '@fortawesome/free-solid-svg-icons'

const tapToTop= ()=>
    <div className="btn-top" onClick={()=>top.scrollToTop()}>
        <FontAwesomeIcon icon={faAngleUp} />
    </div>

export default tapToTop;
