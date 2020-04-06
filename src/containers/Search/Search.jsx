import React from 'react';
import { useHistory } from 'react-router-dom';
import Browse from '../Browse/Browse';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { searchStart } from './searchActions';
import TopResult from '../../components/Results/TopResult';
import Artists from '../../components/Results/Artists';
import Albums from '../../components/Results/Albums';
import NoResults from '../../components/Results/NoResults';
import { SearchContainer } from './searchStyles';
import {
  SectionTitleContainer,
  SectionTitle,
  SectionTitleSeeAll,
  LibraryItemsContainer,
} from '../../components/LibraryItem/playlistItemStyles';
import {
  SongsContainer,
  ArtistsContainer,
  AlbumsContainer,
  TopResultContainer,
} from '../../components/Results/resultsStyles';
import Loader from '../../components/Loader/Loader';
import useTitle from '../../hooks/useTitle';
import useNotifier from '../../hooks/useNotifier';
import TrackItem from '../../components/TrackItem/TrackItem';

const Search = () => {
  const dispatch = useDispatch();

  const { list, searchValue, loading, error } = useSelector(
    ({ search }) => search
  );

  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.',
  });

  useTitle('Spotify - Search');

  const history = useHistory();

  React.useEffect(() => {
    dispatch(searchStart({ query: searchValue }));
  }, [dispatch, searchValue]);

  if (loading) return <Loader isLoading={loading} />;

  const handleSeeAll = (id, type) => {
    history.push(`/app/search/${searchValue.toLowerCase()}/${type}`, { id });
  };

  const canRender = () => {
    if (Object.keys(list).length)
      return list.artists.items.length || list.tracks.items.length;
    return false;
  };

  if (!loading && error && error.includes('401')) showSnackbar();

  return (
    <>
      {searchValue.trim().length ? (
        <div>
          {canRender() ? (
            <SearchContainer>
              {/* TOP RESULT */}
              <TopResultContainer>
                <SectionTitleContainer hasPadding={false}>
                  <SectionTitle>Top result:</SectionTitle>
                </SectionTitleContainer>
                <TopResult
                  id={list?.artists?.items[0]?.id || list.tracks.items[0].id}
                  title={
                    list?.artists?.items[0]?.name || list.tracks.items[0].name
                  }
                  cover={
                    list?.artists?.items[0]?.images[0]?.url ||
                    list?.tracks.items[0]?.album?.images[0].url
                  }
                  type={list?.artists?.items.length ? 'ARTIST' : 'SONG'}
                />
              </TopResultContainer>

              {/* SONGS */}
              {list.tracks && (
                <SongsContainer>
                  <SectionTitleContainer hasPadding={false}>
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
                  {list.tracks.items.map((track, i) => {
                    if (i < 3) {
                      return (
                        <TrackItem
                          song={{ ...track }}
                          hasImage={true}
                          hasDuration={false}
                          hasAlbum={false}
                        />
                      );
                    }
                    return null;
                  })}
                </SongsContainer>
              )}

              {/* ARTISTS */}
              {list.artists.items.length ? (
                <ArtistsContainer>
                  <SectionTitleContainer hasPadding={false}>
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
                  <LibraryItemsContainer hasPadding={false}>
                    {list.artists.items.map((artist, i) => {
                      if (i < 6)
                        return (
                          <Artists
                            key={artist.id}
                            id={artist.id}
                            title={artist.name}
                            cover={
                              artist.images.length ? artist.images[0].url : null
                            }
                          />
                        );
                      return null;
                    })}
                  </LibraryItemsContainer>
                </ArtistsContainer>
              ) : null}

              {/* ALBUMS */}
              <AlbumsContainer>
                <SectionTitleContainer hasPadding={false}>
                  <SectionTitle>Albums</SectionTitle>
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
                <LibraryItemsContainer hasPadding={false}>
                  {list.tracks &&
                    list.tracks.items.map(({ album }, i) => {
                      if (i < 6)
                        return (
                          <Albums
                            key={i}
                            id={album.id}
                            title={album.name}
                            cover={album.images[0].url}
                            artist={album.artists[0].name}
                          />
                        );
                      return null;
                    })}
                </LibraryItemsContainer>
              </AlbumsContainer>
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
