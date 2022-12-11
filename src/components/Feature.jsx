import React from 'react';
import FeatureBox from './FeatureBox';
import figma1 from '../images/1.svg';
import figma2 from '../images/2.svg';
import figma3 from '../images/3.svg';
import figma4 from '../images/4.svg';


const Feature = () => {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className="a-container">
                <FeatureBox image={figma1} title='Weight Liftting'/>
                <FeatureBox image={figma2} title='Specific Muscle'/>
                <FeatureBox image={figma3} title='Flex Your Muscle'/>
                <FeatureBox image={figma4} title='Cardio Exercise'/>

                </div>  
        </div>
    )
}

export default Feature
