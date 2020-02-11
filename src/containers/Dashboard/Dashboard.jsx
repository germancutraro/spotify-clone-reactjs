import React from 'react';
import api from '../../utils/api';

const Dashboard = () => {
  React.useEffect(() => {
    const fetchUser = async () => {
      const res = await api('https://api.spotify.com/v1/me');
      console.log(res);
    };
    fetchUser();
  });
  return (
    <div>
      <h1 style={{ color: '#fff' }}>dashboard</h1>
    </div>
  );
};

export default Dashboard;
