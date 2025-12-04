declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "click", ...args: any[]) => void;
    disabled: boolean;
    dataTest: string;
    type: string;
    size: string;
    $props: {
        readonly disabled?: boolean | undefined;
        readonly dataTest?: string | undefined;
        readonly type?: string | undefined;
        readonly size?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    default?(_: {
        dataTest: string;
    }): any;
};
