import React from 'react';
import {animateScroll as top} from 'react-scroll';

const tapToTop= ()=>
    <div className="btn-top" onClick={()=>top.scrollToTop()}>
        <i className="fas fa-angle-up"></i>
    </div>

export default tapToTop;

