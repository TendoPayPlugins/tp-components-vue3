import { Dayjs } from 'dayjs';
import { DatePickerDay } from '../types';

export default function useDate(): {
    usePreviousDate: (date: Dayjs) => Dayjs[];
    useCurrentDate: (date: Dayjs) => Dayjs[];
    useNextDate: (date: Dayjs) => Dayjs[];
    useDisableDate: (date: Dayjs, { disableDate }: {
        disableDate: boolean | ((date: Date) => boolean);
    }) => boolean;
    useBetweenRange: (date: DatePickerDay, { previous, next }: {
        previous: Dayjs;
        next: Dayjs;
    }) => boolean;
    useToValueFromString: (date: Dayjs, { formatter }: {
        formatter: {
            date: string;
            month: string;
            preview: string;
        };
    }) => string;
    useToFormattedValueFromString: (date: Dayjs, { formatter }: {
        formatter: {
            date: string;
            month: string;
            preview: string;
        };
    }) => string;
    useToValueFromArray: ({ previous, next }: {
        previous: Dayjs;
        next: Dayjs;
    }, { formatter, separator, }: {
        formatter: {
            date: string;
            month: string;
            preview: string;
        };
        separator: string;
    }) => string;
    useToFormattedValueFromArray: ({ previous, next }: {
        previous: Dayjs;
        next: Dayjs;
    }, { formatter, separator, }: {
        formatter: {
            date: string;
            month: string;
            preview: string;
        };
        separator: string;
    }) => string;
};
