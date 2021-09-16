
const unitAppender = (raw: string | number | boolean, unit: string): string => `${raw.toString()}${unit}`;

export default unitAppender;