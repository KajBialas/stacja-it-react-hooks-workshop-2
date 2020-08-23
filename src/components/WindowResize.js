import React, { useState, useEffect} from 'react';

function WindowResize() {
  const [windowSize, setWidnowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    console.log('MOUNT / UPDATE');
  }, [windowSize]);

  const handleWindowResize = () => {
    setWidnowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  const { height, width } = windowSize;
  return(
    <div>
      {height} x {width}
    </div>
  );
}

export default WindowResize;