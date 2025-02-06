export type Accommodation = {
  name: string;
  address: string;
  distance: number;
  price: {
    value: number;
    currency: string;
  };
  options: TAccoommodationOptions;
  availability: number;
  img: string;
  isTopRecommentadion?: boolean;
};

export type TAccoommodationOptions = {
  bussinessCenter: boolean;
  spa: boolean;
  gym: boolean;
  swimmingPool: boolean;
  star5: boolean;
  asianFood: boolean;
};

export type IAccommodationOptionsKeys = keyof TAccoommodationOptions;
