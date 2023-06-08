import clsx from 'clsx';
import { Image } from './types';
import { TrackList } from '../useTrackList';
import { ArrowChevronLeft, ArrowChevronRight } from '../../../components';

type Props = {
  track: TrackList<Image>;
};

export function NavBar({ track }: Props) {
  const navButtonClassName = clsx(
    "flex items-center justify-center p-2 rounded-full",
    "text-black disabled:text-gray-500",
    "border-4 border-black disabled:border-gray-500",
  );

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 border border-gray-400">
      <div className="flex justify-start gap-4">
        <button
          onClick={track.prev}
          disabled={!track.hasPrev}
          className={navButtonClassName}
        >
          <ArrowChevronLeft stroke='currentColor' />
        </button>

        <button
          onClick={track.next}
          disabled={!track.hasNext}
          className={navButtonClassName}
        >
          <ArrowChevronRight  stroke='currentColor' />
        </button>
      </div>
      <h3 className="flex items-center gap-2">
        <span className="text-lg">{track.index + 1}</span>
        <span className="text-2xl">/</span>
        <span className="text-2xl">{track.count}</span>
      </h3>
    </div>
  );
}
