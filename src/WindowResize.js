import React, { useState, useEffect} from 'react';

function WindowResize() {
  const [windowHeight, setHeight] = useState(0);

  useEffect(() => {
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
  };

  return(
    <div>
      {windowHeight}
    </div>
  )
}

export default WindowResize;