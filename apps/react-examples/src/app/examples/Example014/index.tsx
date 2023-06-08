// https://react-hook-form.com/
// https://codesandbox.io/s/react-hook-form-js-wbybv?from-embed=&file=/src/App.js:0-741

import { useState } from "react";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";

import { Header } from "./Header";

type Inputs = {
  firstName: string;
  category: string;
  aboutYou: string;
};

export function Component() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [ data, setData ] = useState("");
  const onSubmit: SubmitHandler<Inputs> = data => setData(JSON.stringify(data));
  const firstNameInput: UseFormRegisterReturn<'firstName'> = register("firstName");
  const categoryInput: UseFormRegisterReturn<'category'> = register("category", { required: true });
  const aboutYouInput: UseFormRegisterReturn<'aboutYou'> = register("aboutYou");

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] mx-auto p-5 mt-6 rounded-md border border-gray-300">
        <input
          {...firstNameInput}
          placeholder="First name"
          className="block w-full rounded border border-gray-400 py-2 px-3 mb-3 text-base"
        />
        <select
          {...categoryInput}
          className="block w-full rounded border border-gray-400 py-2 px-3 mb-3 text-base bg-white"
        >
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea
          {...aboutYouInput}
          placeholder="About you"
          className="block w-full rounded border border-gray-400 py-2 px-3 mb-3 text-base"
        />
        <input
          type="submit"
          className={`
            block relative w-full rounded border border-white py-2 px-3
            text-base font-semibold
            bg-pink-600 hover:bg-pink-800 text-white hover:text-white
            active:top-1 transition uppercase tracking-widest
          `}
        />
      </form>

      <p className="mt-5">{data}</p>
    </div>
  );
}
