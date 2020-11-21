import {SortTypes} from './enums';
import {ReactElement} from 'react';

export interface IAppConfig {
    ASSET_URL: string;
}

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
    func: (a: IHotel, b: IHotel) => number;
    icon: ReactElement;
}

export interface IListable {
    key?: number;
}
