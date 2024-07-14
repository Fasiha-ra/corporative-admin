// components/ImageComponent.js
import React from 'react';

const ImageTableData = ({ src, alt, onClick }) => (
    <img src={src} alt={alt} onClick={onClick} style={{ width: '30px', cursor: 'pointer' }} />
  );
export default ImageTableData;
