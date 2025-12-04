declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    item: string | number | Record<string, any>;
    actions: unknown[];
    position: string;
    buttonClass: string;
    isDisabled: boolean;
    $props: {
        readonly item?: string | number | Record<string, any> | undefined;
        readonly actions?: unknown[] | undefined;
        readonly position?: string | undefined;
        readonly buttonClass?: string | undefined;
        readonly isDisabled?: boolean | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    icon?(_: {}): any;
};
