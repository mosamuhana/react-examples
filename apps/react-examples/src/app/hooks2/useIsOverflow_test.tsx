import { useRef } from "react";

import { useIsOverflow } from "./useIsOverflow";

export const UseIsOverflowExample = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isOverflow = useIsOverflow<HTMLDivElement>(ref, (value) => {
    console.log('value:', value);
    // true
  });

  console.log('isOverflow:', isOverflow);
  // true

  return (
    <div style={{ overflow: 'auto', height: '80vh', border: '1px solid black' }} ref={ref}>
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
      useIsOverflow example useIsOverflow example
      <br />
    </div>
  );
};

export const UseIsOverflowExample1 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isOverflow = useIsOverflow<HTMLDivElement>(ref, (value) => {
    //console.log('value:', value);
    // true
  });

  console.log('isOverflow:', isOverflow);
  // true

  return (
    <div style={{ overflow: 'auto', height: '100px' }} ref={ref}>
      <div style={{ height: '200px' }}>
      useIsOverflow example useIsOverflow example
      </div>
    </div>
  );
};
