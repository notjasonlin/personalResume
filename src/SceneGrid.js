import React from 'react';

const GridOverlay = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      zIndex: 1
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
      }} />
    </div>
  );
};

export default GridOverlay;
