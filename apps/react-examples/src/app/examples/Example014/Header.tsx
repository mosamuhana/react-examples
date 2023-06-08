let renderCount = 0;

export function Header() {
  renderCount++;

  return (
    <div className="mb-4">
      <p className="flex justify-end">
        <span>Render Count: {renderCount}</span>
      </p>

      <h1 className="my-2">
        React Hook Form
      </h1>

      <p className="text-sm">
        Performant, flexible and extensible forms with easy-to-use validation.
      </p>

    </div>
  );
};
