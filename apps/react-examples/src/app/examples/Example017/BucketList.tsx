import { useImmer, Updater } from 'use-immer';

import { IBucket, OnToggle } from './types';
import { initialList } from './data';
import { ItemList } from './ItemList';

function createToggle(updater: Updater<IBucket[]>): OnToggle {
  return (artworkId: number, nextSeen: boolean) => {
    updater(draft => {
      const artwork = draft.find(x => x.id === artworkId);
      if (artwork) artwork.seen = nextSeen;
    });
  };
}

export function BucketList() {
  const [list1, updateList1] = useImmer<IBucket[]>(initialList);
  const [list2, updateList2] = useImmer<IBucket[]>(initialList);

  const toggleList1 = createToggle(updateList1);
  const toggleList2 = createToggle(updateList2);

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list1} onToggle={toggleList1} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={list2} onToggle={toggleList2} />
    </>
  );
}
