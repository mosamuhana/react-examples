// https://www.reshot.com/free-svg-icons/item/chevron-arrow-down-circle-XUEYQV7HKJ/

import { SvgIcon, type SvgIconProps } from './SvgIcon';

export function ChevronArrowDownCircle(props: SvgIconProps) {
  return (
    <SvgIcon
      width="24"
      height="24"
      { ...props }
    >
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
      <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
    </SvgIcon>
  );
}
