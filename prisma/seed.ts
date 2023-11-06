import { PrismaClient, User, Car, Option, Category } from "@prisma/client";

type PermittedFields = "createdAt" | "updatedAt" | "id" | "active";

type UserModel = Omit<User, PermittedFields>;
type CarModel = Omit<Car, PermittedFields | "categoryId">;
type OptionModel = Omit<Option, PermittedFields>;
type CategoryModel = Omit<Category, PermittedFields> & { cars: CarModel[] };

// Це додатки до машин
// Можна додати інше. (Тобто людина сама описує що її потрібно.)

const defaultUser: UserModel = {
  email: "ivan.liaugust@gmail.com",
  firstName: "Ivan",
  isAdmin: true,
  lastName: "Ivanov",
  phoneNumber: "+380505050505",
};

const defaultCategories: CategoryModel[] = [
  {
    coefficient: 0.9,
    name: "Economic",
    cars: [
      {
        name: "Mercedes B-Class",
        image: "",
      },
      {
        name: "Renault Megane",
        image: "",
      },
      {
        name: "BMW 3",
        image: "",
      },
      {
        name: "Audi A4",
        image: "",
      },
    ],
  },
  {
    coefficient: 1,
    name: "Business",
    cars: [
      {
        name: "Mercedes E-Class",
        image: "",
      },
      {
        name: "BMW 5",
        image: "",
      },
      {
        name: "Audi A6",
        image: "",
      },
    ],
  },
  {
    coefficient: 1.1,
    name: "SUV",
    cars: [
      {
        name: "Mazda x7",
        image: "",
      },
      {
        name: "BMW x5",
        image: "",
      },
      {
        name: "Skoda Kodiak",
        image: "",
      },
    ],
  },
  {
    coefficient: 1.3,
    name: "VIP",
    cars: [
      {
        name: "Mercedes V-Class",
        image: "",
      },
      {
        name: "Mercedes C-Class",
        image: "",
      },
      {
        name: "BMW 7",
        image: "",
      },
      {
        name: "Audi A8",
        image: "",
      },
    ],
  },
  {
    coefficient: 1.1,
    name: "Minibus",
    cars: [
      {
        name: "Mercedes Vito",
        image: "",
      },
      {
        name: "Ford Tourneo",
        image: "",
      },
    ],
  },
];

const defaultOptions: OptionModel[] = [
  {
    name: "Child Chair (1-5 years)",
  },
  {
    name: "Child Chair (5-10 years)",
  },
  {
    name: "Fastening for skis",
  },
  {
    name: "Big luggage",
  },
  {
    name: "Bicycles in covers",
  },
];

const prisma = new PrismaClient();

async function upsertCategory(defaultCategory: CategoryModel) {
  const category = await prisma.category.findFirst({
    where: { name: defaultCategory.name },
  });

  if (category) return;

  await prisma.category.create({
    data: {
      name: defaultCategory.name,
      coefficient: defaultCategory.coefficient,
      cars: {
        createMany: {
          data: defaultCategory.cars,
        },
      },
    },
  });
}

async function upsertOption(defaultOption: OptionModel) {
  const option = await prisma.option.findFirst({
    where: { name: defaultOption.name },
  });

  if (option) return;

  await prisma.option.create({
    data: {
      name: defaultOption.name,
    },
  });
}

async function main() {
  await prisma.$connect();

  const user = await prisma.user.upsert({
    where: { email: defaultUser.email },
    create: defaultUser,
    update: defaultUser,
  });

  await Promise.all(defaultCategories.map(upsertCategory));
  await Promise.all(defaultOptions.map(upsertOption));
}

main()
  .then(() => console.log("Seed applied successfully"))
  .catch((error: unknown) => console.log("Seed could not be applied: ", error))
  .finally(() => prisma.$disconnect());
