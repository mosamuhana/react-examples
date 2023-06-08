import { IBucket, OnToggle } from './types';

type Props = {
  artworks: IBucket[];
  onToggle: OnToggle;
};

export function ItemList({ artworks, onToggle }: Props) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => onToggle(artwork.id, e.target.checked)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
