import { useFadeIn } from './hooks';

type Props = {
  duration: number;
};

export function Welcome({ duration }: Props) {
  const ref = useFadeIn<HTMLHeadingElement>(duration, false);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
      }}
    >
      Welcome
    </h1>
  );
}
