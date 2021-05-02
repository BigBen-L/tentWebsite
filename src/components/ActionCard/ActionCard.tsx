import React from 'react';
import './ActionCard.scss';

const ActionCard: React.FC = () => {

  return (
    <>
      <div className={'action'}>
        <div className= {`action-container`}>
          <h3 className={`action-container-head`}>
            About Us
          </h3>
          <div className={`action-container-body`}>

          </div>
        </div>
        <div className= {`action-container`}>
          <h3 className={`action-container-head`}>
            Shop
          </h3>
          <div className={`action-container-body`}>

          </div>
        </div>
        <div className= {`action-container`}>
          <h3 className={`action-container-head`}>
            Gallery
          </h3>
          <div className={`action-container-body`}>

          </div>
        </div>
      </div>
    </>
  )
}

export default ActionCard