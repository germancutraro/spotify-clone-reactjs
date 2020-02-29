import React from 'react';
import Browse from '../Browse/Browse';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { searchStart } from './searchActions';
import TopResult from '../../components/Results/TopResult';
import Songs from '../../components/Results/Songs';
import Artists from '../../components/Results/Artists';
import Albums from '../../components/Results/Albums';
import NoResults from '../../components/Results/NoResults';

const Search = () => {
  const dispatch = useDispatch();

  const { list, searchValue, loading } = useSelector(({ search }) => search);

  React.useEffect(() => {
    dispatch(searchStart({ query: searchValue }));
  }, [dispatch, searchValue]);

  if (loading) return <h1>loading</h1>;
  console.log(list);

  const canRender = () => {
    if (Object.keys(list).length)
      return list.artists.items.length || list.tracks.items.length;
    return false;
  };

  return (
    <div style={{ color: '#fff' }}>
      {searchValue.trim().length ? (
        <div>
          {canRender() ? (
            <div>
              <TopResult
                name={
                  list?.artists?.items[0]?.name || list.tracks.items[0].name
                }
                cover={
                  list?.artists?.items[0]?.images[0]?.url ||
                  list?.tracks.items[0]?.album?.images[0].url
                }
              />

              {list.tracks && (
                <div>
                  <h1 style={{ color: '#fff' }}>Songs:</h1>
                  {list.tracks.items.map((track, i) => {
                    if (i < 3)
                      return (
                        <Songs
                          key={i}
                          name={track.name}
                          artists={track.artists
                            .map(art => art.name)
                            .join(', ')}
                          cover={track?.album?.images[0].url}
                        />
                      );
                    return null;
                  })}
                </div>
              )}

              <div>
                <h1 style={{ color: '#fff' }}>Artists:</h1>

                {list.artists.items.map(artist => (
                  <Artists
                    key={artist.id}
                    name={artist.name}
                    cover={artist.images.length ? artist.images[0].url : null}
                  />
                ))}
              </div>

              <div>
                <h1 style={{ color: '#fff' }}>Albums:</h1>
                {list.tracks &&
                  list.tracks.items.map(({ album }, i) => (
                    <Albums
                      key={i}
                      name={album.name}
                      cover={album.images[0].url}
                      artist={album.artists[0].name}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <NoResults searchValue={searchValue.trim()} />
          )}
        </div>
      ) : (
        <Browse />
      )}
    </div>
  );
};

export default Search;
