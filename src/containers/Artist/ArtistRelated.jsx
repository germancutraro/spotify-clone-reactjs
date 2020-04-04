import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const ArtistRelated = () => {
  const { related, loading } = useSelector(({ artist }) => artist);

  if (loading) return <Loader isLoading={loading} />;

  console.log('SHERMAN EL MAS CAPO', related);

  return (
    <div style={{ color: '#fff' }}>
      <h1>Related</h1>
    </div>
  );
};

export default ArtistRelated;
