import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { getUserStart } from '../Auth/authActions';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserStart());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ color: '#fff' }}>dashboard</h1>
    </div>
  );
};

export default Dashboard;
