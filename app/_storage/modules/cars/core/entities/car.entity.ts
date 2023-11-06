export type CarEntity = {
  id: number;
  name: string;
  seats: number;
  image: string;
  active: boolean;
  createdAt: Date;
  categoryId: number;
  coefficient: number;
  updatedAt: Date | null;
};
