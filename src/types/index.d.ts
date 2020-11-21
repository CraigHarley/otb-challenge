export interface IHotel {
    name: string;
    region: string;
    stars: number;
    price: string;
    adults: number;
    children: number;
    infants: number;
    info: string;
    image: string;
    date: Date;
}

export interface ISort {
    description: string;
    func: Function;
    icon: string;
}

export interface IListable {
    key?: number;
}
