import React, {useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getOkrs} from '../../actions';
import OkrDropdown from './OkrDropdown/OkrDropdown';
import './Okr.css';
import DropDown from '../DropDown/DropDown';

import Loader from "../Loader/Loader";

const Okr = () => {
  const {parentIds, okrRef, showLoader, filterValues} = useSelector(state => state)
  const dispatch = useDispatch();
  const [filteredParentIds, setFilteredParentIds] = useState([]);

  useEffect(() => {
    dispatch(getOkrs());
  }, [dispatch])

  useEffect(() => {
    setFilteredParentIds(parentIds)
  }, [parentIds])

  const onFilterSelection = event => {
    const selectedValue = event.target.value;
    if (selectedValue === 'All')
      return setFilteredParentIds(parentIds);
    setFilteredParentIds(parentIds.filter(id => okrRef[id].category === event.target.value));
  };

  return (
    <Fragment>
      {showLoader ? 
      <Loader /> :
         ( <div className="okr">
            {filterValues.length > 0 ? (
              <Fragment>
                <DropDown change={onFilterSelection} filterValues={filterValues}/>
                {filteredParentIds && filteredParentIds.map((id, index) => (
                  <OkrDropdown
                    key={id}
                    index={index}
                    okrData={okrRef[id]}
                    id={id}
                  />
                ))}
              </Fragment> ) : <span className='no-records'>No OKR records present</span>
            }
          </div> ) 
}
    </Fragment>
  );
};

export default Okr;
