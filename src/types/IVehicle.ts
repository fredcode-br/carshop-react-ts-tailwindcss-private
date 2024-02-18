export default interface IVehicle {
    imageUrl: string;
    title: string;
    price: number;
    year: number;
    onClick?: () => void;
  }
  