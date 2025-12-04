import { Ref } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    shortcuts: boolean | (() => {
        label: string;
        atClick: () => Date[];
    }[]);
    close?: (ref?: Ref | HTMLElement) => void;
    asRange: boolean;
    asSingle: boolean;
    i18n: {
        today: string;
        yesterday: string;
        past: (period: number) => string;
        currentMonth: string;
        pastMonth: string;
    };
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    shortcuts: boolean | (() => {
        label: string;
        atClick: () => Date[];
    }[]);
    close?: (ref?: Ref | HTMLElement) => void;
    asRange: boolean;
    asSingle: boolean;
    i18n: {
        today: string;
        yesterday: string;
        past: (period: number) => string;
        currentMonth: string;
        pastMonth: string;
    };
}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
