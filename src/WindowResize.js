import React, { useState, useEffect} from 'react';

function WindowResize() {
  const [windowHeight, setHeight] = useState(0);
  const [windowWidth, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    console.log('MOUNT / UPDATE');
  }, [windowHeight]);

  const handleWindowResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  return(
    <div>
      {windowHeight} x {windowWidth}
    </div>
  )
}

export default WindowResize;