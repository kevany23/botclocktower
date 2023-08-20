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
  const idx = Math.floor(Math.random() * array.length);
  return idx;
}

export function getRandomElement(array: any[]) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

export function extractRandomElement(array: any[]) {
  const idx = Math.floor(Math.random() * array.length);
  return array.splice(idx);
}