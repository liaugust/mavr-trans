import { BaseUseCaseInput } from "../../../../use-cases/base.use-case-input";

export class CreateRideUseCaseInput extends BaseUseCaseInput {
  carId: number;
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

  arrivalDate: Date;
  departureDate: Date;

  constructor(props: CreateRideUseCaseInput) {
    super(props);

    this.carId = props.carId;
    this.userId = props.userId;
    this.distance = props.distance;
    this.waypoints = props.waypoints;
    this.optionIds = props.optionIds;
    this.categoryId = props.categoryId;
    this.passengers = props.passengers;
    this.arrivalDate = props.arrivalDate;
    this.departureDate = props.departureDate;
  }
}
