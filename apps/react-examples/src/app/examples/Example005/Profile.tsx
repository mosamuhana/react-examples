import { getImageUrl } from '../utils';
import { IProfile } from './types';

type Props = {
  item: IProfile;
};

export function Profile({ item: { imageId, name, profession, awards, discovery, imageSize = 70 } }: Props) {
  return (
    <section className="border border-slate-400 rounded-md p-3 mt-5">
      <h2 className="m-1 font-bold text-lg">{ name }</h2>

      <img
        className="m-2 rounded-full min-h-[70px]"
        src={getImageUrl(imageId)}
        alt={ name }
        width={ imageSize }
        height={ imageSize }
      />

      <ul className="my-0 mx-3">
        <li className="my-1">
          <span className="font-semibold">Profession: </span> { profession }
        </li>
        <li className="my-1">
          <span className="font-semibold">Awards: { awards.length } </span> ({ awards.join(', ') })
        </li>
        <li className="my-1">
          <span className="font-semibold">Discovered: </span> { discovery }
        </li>
      </ul>
    </section>
  );
}
