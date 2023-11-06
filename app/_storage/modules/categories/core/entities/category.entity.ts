export type CategoryEntity = {
  id: number;
  name: string;
  image: string;
  active: boolean;
  coefficient: number;

  createdAt: Date;
  updatedAt: Date | null;
};
