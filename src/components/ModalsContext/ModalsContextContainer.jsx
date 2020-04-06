import React, { createContext, useState } from 'react';

export const ModalsContext = createContext();

const ModalsContextContainer = ({ children }) => {
  const [addTrackData, setAddTrackData] = useState({
    isVisible: false,
    uri: '',
  });
  const [isCreatePlaylistVisible, setIsCreatePlaylistVisible] = useState(false);

  return (
    <ModalsContext.Provider
      value={{
        addTrack: {
          addTrackData: addTrackData,
          setAddTrackData: setAddTrackData,
        },
        createPlaylist: {
          isVisible: isCreatePlaylistVisible,
          setIsVisible: setIsCreatePlaylistVisible,
        },
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContextContainer;
