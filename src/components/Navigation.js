import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Resume from './Resume';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Contact from './Contact';

function Navigation() {
  const [activeComponent, setActiveComponent] = useState('AboutMe');

  const handleNavigationClick = (componentName) => {
    setActiveComponent(componentName);
  };
  let componentToRender;
  switch (activeComponent) {
    case 'AboutMe':
      componentToRender = <AboutMe />;
      break;
    case 'Portfolio':
      componentToRender = <Portfolio />;
      break;
    case 'Contact':
      componentToRender = <Contact />;
      break;
    default:
      componentToRender = <Resume />;
  }
  return (
    <div>
      <Header handleNavigationClick={handleNavigationClick} />
      {componentToRender}
      <Footer />
    </div>
  );
}

export default Navigation;
