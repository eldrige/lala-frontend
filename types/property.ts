import { TUser } from './auth';

export type TProperty = {
  pricePerNight: number;
  title: string;
  rating: number;
  description: string;
  type: string;
  gallery: Array<string>;
  isGuestFavorite: boolean;
  location: string;
  id: string;
  host: TUser;
};
