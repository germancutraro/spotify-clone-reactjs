import React from 'react';
import Browse from '../Browse/Browse';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { searchStart } from './searchActions';
import TopResult from '../../components/Results/TopResult';
import Songs from '../../components/Results/Songs';
import Artists from '../../components/Results/Artists';
import Albums from '../../components/Results/Albums';

const Search = () => {
  const dispatch = useDispatch();

  const { list, searchValue, loading } = useSelector(({ search }) => search);

  React.useEffect(() => {
    dispatch(searchStart({ query: searchValue }));
  }, [dispatch, searchValue]);

  if (loading) return <h1>loading</h1>;
  console.log(list);
  return (
    <div style={{ color: '#fff' }}>
      {searchValue.trim().length ? (
        <div>
          {list.artists && (
            <div>
              <TopResult
                name={list.artists.items[0].name}
                cover={list.artists.items[0].images[0].url}
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
            </div>
          )}

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
        <Browse />
      )}
    </div>
  );
};

export default Search;
