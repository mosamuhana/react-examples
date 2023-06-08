import { useRef } from "react";

import { MyInput } from "./MyInput";

export function Form() {
  const ref = useRef<HTMLInputElement>(null);

  const onClick = () => {
    ref.current?.focus();
  };

  return (
    <form className="flex items-center gap-2">
      <MyInput label="Enter your name:" name="name" ref={ref} />

      <button className="blue-btn" onClick={onClick}>Edit</button>
    </form>
  );
}
