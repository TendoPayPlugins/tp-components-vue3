declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    setData: (inputData: any) => void;
    getData: () => never[];
    updateRecordById: (data: any) => void;
    dataTest: string;
    numerate: boolean;
    goPage: Function;
    showPagination: boolean;
    batchActions: unknown[];
    itemActions: unknown[];
    $props: {
        readonly dataTest?: string | undefined;
        readonly numerate?: boolean | undefined;
        readonly goPage?: Function | undefined;
        readonly showPagination?: boolean | undefined;
        readonly batchActions?: unknown[] | undefined;
        readonly itemActions?: unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare function __VLS_template(): {
    headers?(_: {}): any;
    rows?(_: {}): any;
    columns?(_: {
        item: never;
        class: string;
    }): any;
};
