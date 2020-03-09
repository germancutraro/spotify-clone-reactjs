import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistRelatedStart } from './artistActions';
import Loader from '../../components/Loader/Loader';

const ArtistRelated = () => {
  const dispatch = useDispatch();
  const { related, loading } = useSelector(({ artist }) => artist);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getArtistRelatedStart({ id }));
  }, [dispatch, id]);

  if (loading) return <Loader isLoading={loading} />;
  console.log(related);

  return (
    <div style={{ color: '#Fff' }}>
      <h1>Related</h1>
    </div>
  );
};

export default ArtistRelated;
