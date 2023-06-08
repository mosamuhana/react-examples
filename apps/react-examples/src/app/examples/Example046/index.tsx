import { TwButton } from './TwButton';
import { TwCard } from './TwCard';
import { Alert } from './Alert';

export function Component() {
  return (
    <>
      <TwButton className="ml-3">TwButton</TwButton>

      <hr className="my-5" />

      <TwCard />

      <hr className="my-5" />

      <Alert
        title="Alert"
        details="I am an Alert."
        timestamp="Tue, 06 Sep 2022 22:57:04 GMT"
        actions={
          <div className="w-fit">
            <button className="bg-red-500 text-white rounded hover:bg-red-400 active:scale-90 transition-all p-1">
              Close
            </button>
          </div>
        }
      />

      <br className="my-3" />

      <ul className="pl-4 text-slate-900 dark:text-slate-200 list-image-checkmark">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

    </>
  );
}
