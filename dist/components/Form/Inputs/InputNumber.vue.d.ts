declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "update:modelValue", ...args: any[]) => void;
    disabled: boolean;
    dataTest: string;
    label: string;
    placeholder: string;
    min: number;
    v: Record<string, any>;
    showError: boolean;
    max: number;
    step: number;
    readonly: boolean;
    $props: {
        readonly disabled?: boolean | undefined;
        readonly dataTest?: string | undefined;
        readonly label?: string | undefined;
        readonly placeholder?: string | undefined;
        readonly min?: number | undefined;
        readonly v?: Record<string, any> | undefined;
        readonly showError?: boolean | undefined;
        readonly max?: number | undefined;
        readonly step?: number | undefined;
        readonly readonly?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    info?(_: {}): any;
    success?(_: {}): any;
};
