import { Image } from './types';
import { NavBar } from './NavBar';
import { Description } from './Description';
import { useTrackList, TrackList } from '../useTrackList';

export function Gallery({ images }: { images: Image[] }) {
  const track: TrackList<Image> = useTrackList(images);
  const current = track.current;

  return (
    <>
      <NavBar track={track} />

      <Description image={current} />

      <img className="w-80 h-80 mt-5" src={current.url} alt={current.alt} />
    </>
  );
}
