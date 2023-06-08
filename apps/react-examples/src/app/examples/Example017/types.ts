export interface IBucket {
  id: number;
  title: string;
  seen: boolean;
}

export type OnToggle = (artworkId: number, nextSeen: boolean) => void;
