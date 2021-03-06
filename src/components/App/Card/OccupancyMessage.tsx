import React, {ReactElement} from 'react';

export interface IOccupancyMessageProps {
    adults: number;
    children: number;
    infants: number;
}

const OccupancyMessage = ({adults, children, infants}: IOccupancyMessageProps): ReactElement => {
    if (adults && !children && !infants) {
        return (
            <span>
                {adultMessage(adults)}
            </span>
        );
    }

    if (adults && children && infants) {
        return (
            <span>
                {adultMessage(adults)}, {childMessage(children)} & {infantMessage(infants)}
            </span>
        );
    }

    if (adults && children && !infants) {
        return (
            <span>
                {adultMessage(adults)} & {childMessage(children)}
            </span>
        );
    }

    if (adults && !children && infants) {
        return (
            <span>
                {adultMessage(adults)} & {infantMessage(infants)}
            </span>
        );
    }

    throw Error('Can\'t have a holiday with no adults.');
}

const adultMessage = (count: number): ReactElement => (
    <>
        <strong>{count}</strong> {pluralize('adult', count)}
    </>
);
const childMessage = (count: number): ReactElement => (
    <>
        <strong>{count}</strong> {pluralizeChildren(count)}
    </>
);
const infantMessage = (count: number): ReactElement => (
    <>
        <strong>{count}</strong> {pluralize('infant', count)}
    </>
);

// Could also have used https://www.npmjs.com/package/pluralize
// But it's two lines vs a whole dep.
const pluralize = (original: string, count: number): string => count === 1 ? original : original + 's';
const pluralizeChildren = (count: number): string => count === 1 ? 'child' : 'children';

export default OccupancyMessage;
