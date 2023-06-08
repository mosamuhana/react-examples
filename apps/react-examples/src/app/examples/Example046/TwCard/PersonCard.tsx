import { FC, HTMLAttributes } from 'react';

type Props = {
  title: string;
  imageUrl: string;
  name: string;
  job: string;
} & HTMLAttributes<HTMLDivElement>;

export const PersonCard: FC<Props> = (props) => {
  const { title, name, job, imageUrl, ...rest } = props;
  return (
    <div {...rest}>
      <p className="mb-4 text-sm font-medium">{ title }</p>
      <div className="group flex items-center">
        <img
          className="shrink-0 h-12 w-12 rounded-full"
          src={imageUrl}
          alt={ 'Image of ' + name }
        />
        <div className="ms-3">
          <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
            { name }
          </p>
          <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300">
            { job }
          </p>
        </div>
      </div>
    </div>
  );
};
