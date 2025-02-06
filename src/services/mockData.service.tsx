import { BuildingIcon, FoodIcon, PoolIcon, SpaIcon, Star5Icon } from '../assets';
import { GymIcon } from '../assets/icons/GymIcon';
import { Accommodation, IAccommodationOptionsKeys } from '../models/Accommodation';

const accommodations: Accommodation[] = [
  {
    name: 'The Grand Horizon Hotel',
    address: '123 Beachfront Avenue, Coastal City, CA 90210',
    distance: 2.5,
    price: {
      value: 199,
      currency: 'USD',
    },
    options: {
      bussinessCenter: true,
      spa: true,
      gym: true,
      swimmingPool: true,
      star5: true,
      asianFood: true,
    },
    availability: 10,
    img: 'https://www.example.com/images/grand_horizon_hotel.jpg',
    isTopRecommentadion: true,
  },
  {
    name: 'Luxe Mountain Resort',
    address: '456 Alpine Road, Mountain Peak, CO 80424',
    distance: 12.0,
    price: {
      value: 249,
      currency: 'USD',
    },
    options: {
      bussinessCenter: true,
      spa: true,
      gym: true,
      swimmingPool: true,
      star5: true,
      asianFood: false,
    },
    availability: 5,
    img: 'https://www.example.com/images/luxe_mountain_resort.jpg',
  },
];

const AccommodationOptionMapping: {
  [name in IAccommodationOptionsKeys]: string;
} = {
  bussinessCenter: 'Business Centre',
  spa: 'Spa',
  gym: 'Gym',
  swimmingPool: 'Swimming Pool',
  star5: '5-star',
  asianFood: 'Asian Food',
};

const AccommodationOptionIconsMapping: {
  [name in IAccommodationOptionsKeys]: React.ReactNode;
} = {
  bussinessCenter: <BuildingIcon />,
  spa: <SpaIcon />,
  gym: <GymIcon />,
  swimmingPool: <PoolIcon />,
  star5: <Star5Icon />,
  asianFood: <FoodIcon />,
};

export default { accommodations, AccommodationOptionMapping, AccommodationOptionIconsMapping };
