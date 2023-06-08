// https://react.dev/reference/react/useLayoutEffect
// https://codesandbox.io/s/bj8hpt

import { ButtonWithTooltip } from './ButtonWithTooltip';

export function Page() {
  const Separator = <div style={{ height: 50 }} />;

  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>

      { Separator }

      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>

      { Separator }

      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  );
}
