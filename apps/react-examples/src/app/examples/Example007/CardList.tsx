import { Card } from './Card'

export function CardList() {
  return (
    <div>
      <Card>
        <h1 className="m-1 text-xl">Photo</h1>
        <img
          className="m-3 rounded-full"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1 className="m-1 text-xl">About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}
