import React, { SyntheticEvent } from 'react';
import helpers from '../helpers/fetchOptions';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toggleModal, toggleActionCreator } from '../slices/dashboardSlice';
import { useAppSelector } from '../types/reduxTypes';

const Dashboard = () => {

  const dispatch = useDispatch();
  const modalValue = useAppSelector(state => state.modalIsOpen.renderModal)

  



  return (
    <div>

    </div>
  )
}

export default Dashboard;
