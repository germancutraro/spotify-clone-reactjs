import { useState, useEffect } from 'react';

export default function useTitle(newTitle) {
  const [title, setTitle] = useState(document.title);

  useEffect(() => {
    console.log(newTitle);
    if (newTitle && !newTitle.includes('undefined')) {
      setTitle(newTitle);
      document.title = title;
    }
  }, [title, newTitle]);
}
