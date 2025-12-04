declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "download" | "asyncDone", ...args: any[]) => void;
    disabled: boolean;
    filename: string;
    async: boolean;
    dataTest: string;
    options: unknown[];
    data?: Blob | undefined;
    $props: {
        readonly disabled?: boolean | undefined;
        readonly filename?: string | undefined;
        readonly async?: boolean | undefined;
        readonly dataTest?: string | undefined;
        readonly options?: unknown[] | undefined;
        readonly data?: Blob | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    text?(_: {}): any;
};
