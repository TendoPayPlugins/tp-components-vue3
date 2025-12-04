declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "close" | "save", ...args: any[]) => void;
    size: string;
    scrollable: boolean;
    buttons: boolean;
    closeOutside: boolean;
    backdrop: boolean;
    zindex: number;
    $props: {
        readonly size?: string | undefined;
        readonly scrollable?: boolean | undefined;
        readonly buttons?: boolean | undefined;
        readonly closeOutside?: boolean | undefined;
        readonly backdrop?: boolean | undefined;
        readonly zindex?: number | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    title?(_: {}): any;
    content?(_: {}): any;
    buttons?(_: {
        class: string;
    }): any;
};
