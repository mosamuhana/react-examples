// https://www.reshot.com/free-svg-icons/item/chevron-arrow-up-circle-NTDM4Q79JV/

import { SvgIcon, type SvgIconProps } from './SvgIcon';

export function ChevronArrowUpCircle(props: SvgIconProps) {
  return (
    <SvgIcon
      width="24"
      height="24"
      { ...props }
    >
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
      <path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z" />
    </SvgIcon>
  );
}
