import React from 'react';
import { useHistory } from 'react-router-dom';
import Browse from '../Browse/Browse';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { searchStart } from './searchActions';
import TopResult from '../../components/Results/TopResult';
import Songs from '../../components/Results/Songs';
import Artists from '../../components/Results/Artists';
import Albums from '../../components/Results/Albums';
import NoResults from '../../components/Results/NoResults';
import { SearchContainer } from './searchStyles';
import {
  SectionTitleContainer,
  SectionTitle,
  SectionTitleSeeAll
} from '../../components/LibraryItem/playlistItemStyles';

const Search = () => {
  const dispatch = useDispatch();

  const { list, searchValue, loading } = useSelector(({ search }) => search);

  const history = useHistory();

  React.useEffect(() => {
    dispatch(searchStart({ query: searchValue }));
  }, [dispatch, searchValue]);

  if (loading) return <h1>loading</h1>;

  const handleSeeAll = (id, type) => {
    history.push(`/app/search/${searchValue.toLowerCase()}/${type}`, { id });
  };

  const canRender = () => {
    if (Object.keys(list).length)
      return list.artists.items.length || list.tracks.items.length;
    return false;
  };

  return (
    <>
      {searchValue.trim().length ? (
        <div>
          {canRender() ? (
            <SearchContainer>
              <TopResult
                name={
                  list?.artists?.items[0]?.name || list.tracks.items[0].name
                }
                cover={
                  list?.artists?.items[0]?.images[0]?.url ||
                  list?.tracks.items[0]?.album?.images[0].url
                }
                type={list?.artists?.items.length ? 'ARTIST' : 'SONG'}
              />

              {list.tracks && (
                <div>
                  <SectionTitleContainer>
                    <SectionTitle>Songs</SectionTitle>
                    {list?.artists?.items.length ? (
                      <SectionTitleSeeAll
                        onClick={() =>
                          handleSeeAll(
                            list?.artists?.items[0]?.id ||
                              list.tracks.items[0].id,
                            'tracks'
                          )
                        }
                      >
                        SEE ALL
                      </SectionTitleSeeAll>
                    ) : null}
                  </SectionTitleContainer>
                  <h1 style={{ color: '#fff' }}>Songs:</h1>
                  {list?.artists?.items.length ? (
                    <p
                      onClick={() =>
                        handleSeeAll(
                          list?.artists?.items[0]?.id ||
                            list.tracks.items[0].id,
                          'tracks'
                        )
                      }
                      style={{ color: '#b3b3b3', margin: '20px 30px' }}
                    >
                      SEE ALL
                    </p>
                  ) : null}
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
              {list.artists.items.length ? (
                <div>
                  <SectionTitleContainer>
                    <SectionTitle>Artists</SectionTitle>
                    <SectionTitleSeeAll
                      onClick={() =>
                        handleSeeAll(
                          list?.artists?.items[0]?.id ||
                            list.tracks.items[0].id,
                          'artists'
                        )
                      }
                    >
                      SEE ALL
                    </SectionTitleSeeAll>
                  </SectionTitleContainer>

                  {list.artists.items.map((artist, i) => {
                    if (i < 6)
                      return (
                        <Artists
                          key={artist.id}
                          name={artist.name}
                          cover={
                            artist.images.length ? artist.images[0].url : null
                          }
                        />
                      );
                    return null;
                  })}
                </div>
              ) : null}

              <div>
                <h1 style={{ color: '#fff' }}>Albums:</h1>
                <SectionTitleContainer>
                  <SectionTitle>Artists</SectionTitle>
                  {list?.artists?.items.length ? (
                    <SectionTitleSeeAll
                      onClick={() =>
                        handleSeeAll(list?.artists?.items[0]?.id, 'albums')
                      }
                    >
                      SEE ALL
                    </SectionTitleSeeAll>
                  ) : null}
                </SectionTitleContainer>

                {list.tracks &&
                  list.tracks.items.map(({ album }, i) => {
                    if (i < 6)
                      return (
                        <Albums
                          key={i}
                          name={album.name}
                          cover={album.images[0].url}
                          artist={album.artists[0].name}
                        />
                      );
                    return null;
                  })}
              </div>
            </SearchContainer>
          ) : (
            <NoResults searchValue={searchValue.trim()} />
          )}
        </div>
      ) : (
        <Browse />
      )}
    </>
  );
};

export default Search;
