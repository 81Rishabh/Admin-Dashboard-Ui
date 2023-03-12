import React from "react";

function Image({ src,w,h }) {
  return (
    <div
      style={{
        width: w ? `${w}px` : "50px",
        height: h ? `${h}px` : "50px",
        borderRadius: "50%",
        background: '#F2F2F2',
        display : 'grid',
        placeItems : "center"
      }}
    >
      <img src={src} alt={`${src}-logo`} width="70%" />
    </div>
  );
}

export default Image;
