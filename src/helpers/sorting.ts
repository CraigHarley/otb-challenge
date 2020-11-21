import {SortDirections, SortTypes} from '../types/enums';
import {IHotel} from '../types';

export const sort = (key: SortTypes, a: IHotel, b: IHotel, direction: SortDirections): number => {
    if (a[key] > b[key]) {
        return direction;
    }
    if (a[key] < b[key]) {
        return -direction;
    }
    return 0;
}
