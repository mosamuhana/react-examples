import { IImage } from "./types";

export const catList: IImage[] = [];

for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
