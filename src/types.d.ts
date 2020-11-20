interface IHotel {
    name: string;
    region: string;
    stars: number;
    price: number;
    adults: number;
    children: number;
    infants: number;
    info: string;
}

interface ISort {
    description: string;
    func: Function;
    icon: string;
}
