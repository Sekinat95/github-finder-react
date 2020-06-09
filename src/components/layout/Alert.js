import React from 'react';

const Alert = ({ Alert }) => {
  return (
    Alert !== null && (
      <div className={`alert alert-${Alert.type}`}>
        <i className='fa fa-info-circle'></i> {Alert.msg}
      </div>
    )
  );
};
export default Alert;
