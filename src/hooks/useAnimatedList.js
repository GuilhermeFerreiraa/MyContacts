import {
  createRef, useCallback, useEffect, useRef, useState,
} from 'react';

export default function useAnimatedList(initialValue = []) {
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([]);
  const [items, setItems] = useState(initialValue);

  const animatedRefs = useRef(new Map());

  const animationEndListeners = useRef(new Map());

  const handleRemoveItems = useCallback((id) => {
    setPendingRemovalItemsIds((prevState) => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback((itemId) => {
    const removeListener = animationEndListeners.current.get(itemId);
    removeListener();

    animationEndListeners.current.delete(itemId);
    animatedRefs.current.delete(itemId);

    setItems((prevState) => prevState.filter((item) => item.id !== itemId));
    setPendingRemovalItemsIds((prevState) => prevState.filter((id) => itemId !== id));
  }, []);

  // srp -> single responsability principal

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId);
      const alreadyHasListener = animationEndListeners.current.has(itemId);
      const animatedElement = animatedRef?.current;

      if (animatedRef?.current && !alreadyHasListener) {
        const onAnimationEnd = () => handleAnimationEnd(itemId);
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd);
        };

        animatedElement.addEventListener('animationend', onAnimationEnd);
        animationEndListeners.current.set(itemId, removeListener);
      }
    });
  }, [pendingRemovalItemsIds, handleAnimationEnd]);

  useEffect(() => {
    const removeListeners = animationEndListeners.current;

    return () => {
      removeListeners.forEach((removeListener) => removeListener());
    };
  }, []);

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback(
    (renderItem) => items.map((item) => {
      const isleaving = pendingRemovalItemsIds.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);
      return renderItem(item, { isleaving, animatedRef });
    }),
    [items, pendingRemovalItemsIds, getAnimatedRef],
  );

  return {
    setPendingRemovalItemsIds,
    handleRemoveItems,
    renderList,
    setItems,
    items,
  };
}
