export function className(map: Record<string, any>) {
  return Object.entries(map)
    .filter(([k, v]) => !!v && !!k)
    .map(([k, _]) => k).join(' ');
}
