import React, {Fragment, useState} from 'react';
import {useSelector} from 'react-redux';
import Avatar from '../../Avatar/Avatar';
import './OkrDetails.css';
import Modal from '../../Modal/Modal';
import {okrDataPropType} from '../../../utils/okrPropMapper'
import PropTypes from 'prop-types';

const OkrDetails = ({okrData, id, isChild, parentIndex}) => {
  const [showModal, setShowModal] = useState(false);
  const {okrRef} = useSelector(state => state);
  const {title} = okrData;
  return (
    <Fragment>
      <div className={`okr-details ${isChild ? 'child' : ''}`} onClick={() => setShowModal(true)}>
        <Avatar styleClass='okr-details__image-wrapper__user-image'/>
        {isChild
          ? <li className='okr-details__li-content' key={id}>{title}</li>
          : <span className='okr-details__content'>{parentIndex}. {title}</span>
        }
      </div>
      {showModal && (
        <Modal header={title} updateModalState={() => setShowModal(false)}>
          {Object.keys(okrData).map(data => (
              <span key={data}><b>{data.replace('-',' ')}:</b> {okrData[data]}</span>
              ))}
          {okrRef[okrData.parent_objective_id] && (
            <span><b>Parent Objective</b>: {okrRef[okrData.parent_objective_id].title}</span>
          )}
        </Modal>
      )}
    </Fragment>
  );
}

OkrDetails.propTypes = {
  okrData: okrDataPropType,
  id: PropTypes.string,
  isChild: PropTypes.bool,
  parentIndex: PropTypes.number
};

export default OkrDetails;
