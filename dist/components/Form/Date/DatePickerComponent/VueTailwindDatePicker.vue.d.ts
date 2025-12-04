import { Dayjs } from 'dayjs';

interface Props {
    noInput?: boolean;
    overlay?: boolean;
    asSingle?: boolean;
    useRange?: boolean;
    placeholder?: string;
    i18n?: string;
    inputClasses?: string;
    disabled?: boolean;
    disableInRange?: boolean;
    disableDate?: boolean | ((date: Date) => boolean);
    autoApply?: boolean;
    shortcuts?: boolean | (() => {
        label: string;
        atClick: () => Date[];
    }[]);
    separator?: string;
    formatter?: {
        date: string;
        month: string;
        preview: string;
    };
    startFrom?: Date;
    weekdaysSize?: string;
    weekNumber?: boolean;
    options?: {
        shortcuts: {
            today: string;
            yesterday: string;
            past: (period: number) => string;
            currentMonth: string;
            pastMonth: string;
        };
        footer: {
            apply: string;
            cancel: string;
        };
    };
    time: boolean;
    modelValue: [Date, Date] | {
        start: Date | string;
        end: Date | string;
    } | {
        startDate: Date | string;
        endDate: Date | string;
    } | string;
}
declare function clearPicker(): void;
declare function __VLS_template(): {
    default?(_: {
        value: string;
        placeholder: string;
        clear: typeof clearPicker;
    }): any;
    inputIcon?(_: {
        value: string;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    placeholder: string;
    i18n: string;
    inputClasses: string;
    disabled: boolean;
    disableInRange: boolean;
    disableDate: boolean;
    autoApply: boolean;
    shortcuts: boolean;
    separator: string;
    formatter: () => {
        date: string;
        month: string;
        preview: string;
    };
    startFrom: () => Date;
    weekdaysSize: string;
    weekNumber: boolean;
    options: () => {
        shortcuts: {
            today: string;
            yesterday: string;
            past: (period: any) => string;
            currentMonth: string;
            pastMonth: string;
        };
        footer: {
            apply: string;
            cancel: string;
        };
    };
    time: boolean;
    modelValue: () => Date[];
}>>, {
    clearPicker: typeof clearPicker;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | string[] | Dayjs[] | Record<string, string>) => void;
    selectMonth: (value: Dayjs) => void;
    selectYear: (value: Dayjs) => void;
    selectTime: (value: Dayjs) => void;
    selectRightMonth: (value: Dayjs) => void;
    selectRightYear: (value: Dayjs) => void;
    clickPrev: (value: Dayjs) => void;
    clickNext: (value: Dayjs) => void;
    clickRightPrev: (value: Dayjs) => void;
    clickRightNext: (value: Dayjs) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    placeholder: string;
    i18n: string;
    inputClasses: string;
    disabled: boolean;
    disableInRange: boolean;
    disableDate: boolean;
    autoApply: boolean;
    shortcuts: boolean;
    separator: string;
    formatter: () => {
        date: string;
        month: string;
        preview: string;
    };
    startFrom: () => Date;
    weekdaysSize: string;
    weekNumber: boolean;
    options: () => {
        shortcuts: {
            today: string;
            yesterday: string;
            past: (period: any) => string;
            currentMonth: string;
            pastMonth: string;
        };
        footer: {
            apply: string;
            cancel: string;
        };
    };
    time: boolean;
    modelValue: () => Date[];
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | string[] | Dayjs[] | Record<string, string>) => any) | undefined;
    onSelectMonth?: ((value: Dayjs) => any) | undefined;
    onSelectYear?: ((value: Dayjs) => any) | undefined;
    onSelectTime?: ((value: Dayjs) => any) | undefined;
    onSelectRightMonth?: ((value: Dayjs) => any) | undefined;
    onSelectRightYear?: ((value: Dayjs) => any) | undefined;
    onClickPrev?: ((value: Dayjs) => any) | undefined;
    onClickNext?: ((value: Dayjs) => any) | undefined;
    onClickRightPrev?: ((value: Dayjs) => any) | undefined;
    onClickRightNext?: ((value: Dayjs) => any) | undefined;
}>, {
    disabled: boolean;
    options: {
        shortcuts: {
            today: string;
            yesterday: string;
            past: (period: number) => string;
            currentMonth: string;
            pastMonth: string;
        };
        footer: {
            apply: string;
            cancel: string;
        };
    };
    time: boolean;
    shortcuts: boolean | (() => {
        label: string;
        atClick: () => Date[];
    }[]);
    i18n: string;
    weekNumber: boolean;
    disableDate: boolean | ((date: Date) => boolean);
    formatter: {
        date: string;
        month: string;
        preview: string;
    };
    separator: string;
    modelValue: [Date, Date] | {
        start: Date | string;
        end: Date | string;
    } | {
        startDate: Date | string;
        endDate: Date | string;
    } | string;
    placeholder: string;
    inputClasses: string;
    disableInRange: boolean;
    autoApply: boolean;
    startFrom: Date;
    weekdaysSize: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
