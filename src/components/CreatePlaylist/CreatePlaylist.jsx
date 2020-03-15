import React from 'react';
import PropTypes from 'prop-types';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPlaylistStart } from '../../containers/Playlists/playlistsActions';
// styles
import {
  ModalContainer,
  ModalDialog,
  ModalCross,
  ModalTitle,
  ModalLabel,
  ModalInputTitle,
  ModalInput,
  ModalButtonOutline,
  ModalButton,
  ModalCrossContainer
} from './createPlaylistStyles';

const CreatePlaylist = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const { user } = useSelector(({ auth }) => auth);

  const handleCreatePlaylist = () => {
    if (value.length)
      dispatch(createPlaylistStart({ userId: user?.id, name: value }));
  };

  return (
    <ModalDialog
      style={{
        display: isOpen ? 'block' : 'none'
      }}
    >
      <ModalContainer>
        <ModalCrossContainer onClick={handleClose}>
          <ModalCross stroke='#fff' width={55} height={55} />
        </ModalCrossContainer>
        <ModalTitle>Create Playlist</ModalTitle>
        <ModalLabel>
          <ModalInputTitle>New playlist</ModalInputTitle>
          <ModalInput
            type='text'
            placeholder='New Playlist'
            onChange={e => setValue(e.target.value.trim())}
          />
        </ModalLabel>

        <ModalButtonOutline onClick={handleClose}>Cancel</ModalButtonOutline>
        <ModalButton onClick={handleCreatePlaylist}>Create</ModalButton>
      </ModalContainer>
    </ModalDialog>
  );
};

CreatePlaylist.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default CreatePlaylist;
