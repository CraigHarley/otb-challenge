import {SortTypes} from "./enums";

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
    name: string;
    type: SortTypes;
    func: Function;
    icon: string;
}

export interface IListable {
    key?: number;
}
