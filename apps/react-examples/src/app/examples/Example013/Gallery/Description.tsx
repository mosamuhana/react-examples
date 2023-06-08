import { useState } from 'react';
import clsx from 'clsx';

import {
  ChevronArrowDownCircle,
  ChevronArrowUpCircle,
} from '../../../components';
import { Image } from './types';

type Props = {
  image: Image;
};

export function Description({ image }: Props) {
  const [showMore, setShowMore] = useState(false);
  const toggle = () => setShowMore(!showMore);
  const label = (showMore ? 'Hide' : 'Show') + ' details';

  return (
    <div className="rounded-md border border-gray-500 overflow-hidden mt-5">
      <div
        className={clsx(
          'flex justify-between items-center gap-2 p-2',
          showMore && 'border-b border-b-gray-500'
        )}
      >
        <h2 className="my-0">
          <i>{image.name} </i>
          by <span className="font-bold">{image.artist}</span>
        </h2>

        <button onClick={toggle} className="flex gap-2"
        >
          <span>{label}</span>
          {showMore ? <ChevronArrowUpCircle /> : <ChevronArrowDownCircle />}
        </button>
      </div>

      {showMore && <p className="p-4">{image.description}</p>}
    </div>
  );
}
