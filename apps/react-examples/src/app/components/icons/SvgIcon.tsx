import { ReactNode, SVGAttributes } from "react";

export type SvgIconProps = Omit<SVGAttributes<SVGSVGElement>, 'xmlns'>;

type Props = { children: ReactNode; } & SvgIconProps;

export function SvgIcon({ children, ...props }: Props) {
  return (
    <svg { ...props } xmlns="http://www.w3.org/2000/svg">
      { children }
    </svg>
  );
}
