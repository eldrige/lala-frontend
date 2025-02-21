export function formatISODate(isoDate: string): string {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}

const IMAGES = [
  'house',
  'house-one',
  'house-two',
  'house-three',
  'house-four',
  'house-five',
  'house-six',
  'house-seven',
  'house-eight',
  'house-nine',
  'house-ten',
  'house-eleven',
];
export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  return `/images/${IMAGES[randomIndex]}.jpg`;
};
