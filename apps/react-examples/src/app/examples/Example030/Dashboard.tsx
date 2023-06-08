import { DebouncedButton } from './DebouncedButton';

export function Dashboard() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <DebouncedButton onClick={() => alert('Spaceship launched!')}>
        Launch the spaceship
      </DebouncedButton>

      <DebouncedButton onClick={() => alert('Soup boiled!')}>
        Boil the soup
      </DebouncedButton>

      <DebouncedButton onClick={() => alert('Lullaby sung!')}>
        Sing a lullaby
      </DebouncedButton>
    </div>
  );
}
