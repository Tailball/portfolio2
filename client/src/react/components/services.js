import React from 'react';

import GfxDesigner from "./services/services_GfxDesigner";
import Webdesigner from './services/services_Webdesigner';
import WebDeveloper from './services/services_WebDeveloper';
import Tutor from './services/services_Tutor';

const Services = () => {
    return <section className="services">
        <GfxDesigner />
        <Webdesigner />
        <WebDeveloper />
        <Tutor />
      </section>;
}

export default Services;