import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import clsx from 'clsx';

import { catList } from './data';

export function CatFriends() {
  const selectedRef = useRef<HTMLLIElement>(null);
  const [index, setIndex] = useState(0);

  const onNext = () => {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    selectedRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <>
      <nav className="mb-5">
        <button className="blue-btn" onClick={onNext}>Next</button>
      </nav>

      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null }>
              <img className={clsx(
                "p-2 -m-2",
                index === i && "bg-blue-500",
              )}
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
