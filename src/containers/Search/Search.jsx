import React from 'react';
import Browse from '../Browse/Browse';
import { ReactComponent as DefaultCover } from '../../assets/icons/defaultCover.svg';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { searchStart } from './searchActions';

const Search = () => {
  const dispatch = useDispatch();

  const { list, searchValue, loading } = useSelector(({ search }) => search);

  React.useEffect(() => {
    dispatch(searchStart({ query: searchValue }));
  }, [dispatch, searchValue]);

  if (loading) return <h1>loading</h1>;
  console.log(list);
  return (
    <div>
      {searchValue.length ? (
        list.artists && (
          <div style={{ color: '#fff' }}>
            <div>
              <h1 style={{ color: '#fff' }}>Top result:</h1>
              {list.artists.items[0] && (
                <img
                  src={list.artists.items[0].images[0].url}
                  alt=''
                  width={100}
                  height={100}
                />
              )}

              <h3>{list.artists.items[0].name}</h3>
              <p>ARTIST</p>
            </div>

            {list.tracks && (
              <div>
                <h1 style={{ color: '#fff' }}>Songs:</h1>
                {list.tracks.items.map((track, i) => {
                  if (i < 3)
                    return (
                      <div>
                        <img
                          src={'https://i.musicaimg.com/letras/max/2384532.jpg'}
                          alt=''
                          width={50}
                          height={50}
                        />
                        <p>{track.name}</p>
                        <p style={{ color: 'red' }}>
                          {track.artists.map(art => art.name).join(', ')}
                        </p>
                      </div>
                    );
                  return null;
                })}
              </div>
            )}

            <div>
              <h1 style={{ color: '#fff' }}>Artists:</h1>

              {list.artists.items.map(artist => (
                <div>
                  {artist.images.length ? (
                    <img
                      src={artist.images[0].url}
                      alt=''
                      width={100}
                      height={100}
                    />
                  ) : (
                    <DefaultCover width={100} height={100} />
                  )}
                  <p>{artist.name}</p>
                </div>
              ))}
            </div>

            <div>
              <h1 style={{ color: '#fff' }}>Albums:</h1>

              {list.tracks.items.map(({ album }) => (
                <div>
                  <img
                    src={album.images[0].url}
                    alt=''
                    width={60}
                    height={60}
                  />
                  <p>{album.name}</p>
                  <p>{album.artists[0].name}</p>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <Browse />
      )}
    </div>
  );
};

export default Search;
