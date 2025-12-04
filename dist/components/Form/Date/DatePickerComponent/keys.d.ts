import { InjectionKey, Ref } from 'vue';
import { Dayjs } from 'dayjs';
import { DatePickerDay } from './types';

declare const isBetweenRangeKey: InjectionKey<(date: DatePickerDay) => boolean>;
declare const betweenRangeClassesKey: InjectionKey<(date: Dayjs) => string>;
declare const datepickerClassesKey: InjectionKey<(date: DatePickerDay) => string | undefined>;
declare const atMouseOverKey: InjectionKey<(date: Dayjs) => false | undefined>;
declare const setToTodayKey: InjectionKey<(close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void>;
declare const setToYesterdayKey: InjectionKey<(close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void>;
declare const setToLastDayKey: InjectionKey<(day: number, close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void>;
declare const setToThisMonthKey: InjectionKey<(close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void>;
declare const setToLastMonthKey: InjectionKey<(close?: ((ref?: Ref | HTMLElement) => void) | undefined) => void>;
declare const setToCustomShortcutKey: InjectionKey<(item: {
    label: string;
    atClick: () => Date[];
}, close?: (ref?: Ref | HTMLElement) => void) => void>;
export { isBetweenRangeKey, betweenRangeClassesKey, datepickerClassesKey, atMouseOverKey, setToTodayKey, setToYesterdayKey, setToLastDayKey, setToThisMonthKey, setToLastMonthKey, setToCustomShortcutKey, };
