import React from 'react';
import { useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumStart } from './albumActions';

const Album = () => {
  const dispatch = useDispatch();
  const { album, loading } = useSelector(({ album }) => album);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getAlbumStart({ id }));
  }, [dispatch, id]);

  if (loading) return <h1 style={{ color: '#fff' }}>loading...</h1>;

  console.log('El album es: ', album);

  return (
    <div style={{ color: '#fff' }}>
      <h1>Album: {album.name}</h1>
    </div>
  );
};

export default Album;
