declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    calendar: {
        date: () => any[];
        month: string;
        year: number;
        years: () => number[];
        onPrevious: () => void;
        onNext: () => void;
        onPreviousYear: () => void;
        onNextYear: () => void;
        openMonth: () => void;
        setMonth: ($event: number) => void;
        openYear: () => void;
        setYear: ($event: number) => void;
    };
    weeks: string[];
    weekNumber: boolean;
    asRange: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    updateDate: (event: any) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    calendar: {
        date: () => any[];
        month: string;
        year: number;
        years: () => number[];
        onPrevious: () => void;
        onNext: () => void;
        onPreviousYear: () => void;
        onNextYear: () => void;
        openMonth: () => void;
        setMonth: ($event: number) => void;
        openYear: () => void;
        setYear: ($event: number) => void;
    };
    weeks: string[];
    weekNumber: boolean;
    asRange: boolean;
}>>> & Readonly<{
    onUpdateDate?: ((event: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
