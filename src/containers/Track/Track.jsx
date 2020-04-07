import React, { useState, useEffect, useRef } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { pauseSong, resumeSong } from './trackActions';
// styles
import { TrackContainer, PlayerRight } from './trackStyles';
import Volume from '../../components/TrackControls/Volume';
import { useHistory } from 'react-router-dom';
import TrackLeft from '../../components/Track/TrackLeft/TrackLeft';
import TrackCenter from '../../components/Track/TrackCenter/TrackCenter';

const Track = () => {
  const dispatch = useDispatch();
  const { song, isPlaying, list } = useSelector(({ track }) => track);
  const audioRef = useRef();

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [volume, setVolume] = useState(localStorage.getItem('volume') ?? 1.0);

  const history = useHistory();

  useEffect(() => {
    const { current: audio } = audioRef;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying, song]);

  useEffect(() => {
    if (audioRef) audioRef.current.volume = volume;
  }, [audioRef, volume]);

  const handleAudio = () => {
    if (Object.keys(song).length) {
      if (isPlaying) dispatch(pauseSong());
      else dispatch(resumeSong());
    }
  };

  const handleChangeRoute = route => history.push(`/app/${route}`);

  const { preview_url } = song;

  return (
    <TrackContainer>
      <audio src={preview_url} ref={audioRef}></audio>

      <TrackLeft song={song} handleChangeRoute={handleChangeRoute} />

      <TrackCenter
        handleAudio={handleAudio}
        timeElapsed={timeElapsed}
        setTimeElapsed={setTimeElapsed}
        isPlaying={isPlaying}
        songId={song.id}
        songList={list}
        ref={audioRef}
      />

      <PlayerRight>
        <Volume ref={audioRef} volume={volume} setVolume={setVolume} />
      </PlayerRight>
    </TrackContainer>
  );
};

export default Track;
