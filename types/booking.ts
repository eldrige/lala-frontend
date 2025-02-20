export interface TBooking {
  id: string;
  renterId: string;
  propertyId: string;
  checkIn: string;
  checkOut: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'COMPLETED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
  renter: Renter;
  property: Property;
}

interface Property {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  hostId: string;
  createdAt: string;
  updatedAt: string;
  host: Renter;
}

interface Renter {
  id: string;
  email: string;
  name: string;
  googleId: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  avatar: null;
}
