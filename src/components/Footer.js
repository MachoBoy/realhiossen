import React from 'react';

const Footer = () => {
  return (
    <div className="footer" style={styles.footerStyle}>
      Footer Content
    </div>
  );
};

const styles = {
  footerStyle: {
    background: '#333333',
    marginTop: '50px',
    bottom: '0',
    left: '0',
    height: '70px',
    width: '100%'
  }
};

export default Footer;
