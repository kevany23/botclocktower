export function booleanFilter(array: any, filters: boolean[]) {
  let filtered: any[] = [];
  array.forEach((item: any, idx: number) => {
    if (filters[idx]) {
      filtered.push(item);
    }
  })
  return filtered;
}