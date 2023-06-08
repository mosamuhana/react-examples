import { IProfile } from './types';
import { Profile } from './Profile';

type Props = {
  items: IProfile[];
};

export function Gallery({ items }: Props) {
  return (
    <div>
      <h1 className="m-2 mb-3 text-xl">Notable Scientists</h1>

      {items.map(item => <Profile key={item.name} item={item} />)}

    </div>
  );
}
