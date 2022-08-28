const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
} as const;

type Points = keyof typeof breakpoints;
type PointValues = typeof breakpoints[Points];

const getObjKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export function mq(point: Points) {
  const bpArray = getObjKeys(breakpoints).map<[Points, PointValues]>(key => [
    key,
    breakpoints[key],
  ]);

  const [result] = bpArray.reduce<string[]>((acc, [name, size]) => {
    if (name === point) {
      return [...acc, `@media (min-width: ${size}px)`];
    } else {
      return acc;
    }
  }, []);

  return result;
}
