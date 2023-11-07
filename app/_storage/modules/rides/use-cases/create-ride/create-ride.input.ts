import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateRideUseCaseInput extends BaseUseCaseInput {
  carId: number;
  phone: string;
  userId: string;
  distance: number;
  categoryId: number;
  passengers: number;
  optionIds: number[];

  waypoints: {
    shortAddress: string;
    fullAddress: string;
    order: number;
    lat: number;
    lng: number;
  }[];

  constructor(props: CreateRideUseCaseInput) {
    super(props);

    this.carId = props.carId;
    this.phone = props.phone;
    this.userId = props.userId;
    this.distance = props.distance;
    this.waypoints = props.waypoints;
    this.optionIds = props.optionIds;
    this.categoryId = props.categoryId;
    this.passengers = props.passengers;
  }
}
