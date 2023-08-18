export function booleanFilter(array: any, filters: boolean[]) {
  let filtered: any[] = [];
  array.forEach((item: any, idx: number) => {
    if (filters[idx]) {
      filtered.push(item);
    }
  })
  return filtered;
}

export function getRandomIndex(array: any[]) {
  const n = array.length - 1;
  const idx = Math.floor(Math.random() * (n - 1));
  return idx;
}

export function getRandomElement(array: any[]) {
  const n = array.length - 1;
  const idx = Math.floor(Math.random() * (n - 1));
  return array[idx];
}

export function extractRandomElement(array: any[]) {
  const n = array.length - 1;
  const idx = Math.floor(Math.random() * (n - 1));
  return array.splice(idx);
}