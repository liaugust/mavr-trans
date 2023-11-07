export type CategoryEntity = {
  id: number;
  name: string;
  image: string;
  active: boolean;
  coefficient: number;
  maximumSeats: number;

  createdAt: Date;
  updatedAt: Date | null;
};
