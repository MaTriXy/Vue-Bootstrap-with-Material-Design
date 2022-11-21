declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            borderless: boolean;
            light: boolean;
            dark: boolean;
            border: string | boolean;
            hover: boolean;
            striped: boolean;
            sm: boolean;
            responsive: string | boolean;
            captionTop: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            variant: StringConstructor;
            dark: {
                type: BooleanConstructor;
                default: boolean;
            };
            light: {
                type: BooleanConstructor;
                default: boolean;
            };
            border: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            borderless: {
                type: BooleanConstructor;
                default: boolean;
            };
            striped: {
                type: BooleanConstructor;
                default: boolean;
            };
            hover: {
                type: BooleanConstructor;
                default: boolean;
            };
            responsive: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            align: StringConstructor;
            sm: {
                type: BooleanConstructor;
                default: boolean;
            };
            tableStyle: StringConstructor;
            captionTop: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "borderless" | "light" | "dark" | "border" | "hover" | "striped" | "sm" | "responsive" | "captionTop">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            variant: StringConstructor;
            dark: {
                type: BooleanConstructor;
                default: boolean;
            };
            light: {
                type: BooleanConstructor;
                default: boolean;
            };
            border: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            borderless: {
                type: BooleanConstructor;
                default: boolean;
            };
            striped: {
                type: BooleanConstructor;
                default: boolean;
            };
            hover: {
                type: BooleanConstructor;
                default: boolean;
            };
            responsive: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            align: StringConstructor;
            sm: {
                type: BooleanConstructor;
                default: boolean;
            };
            tableStyle: StringConstructor;
            captionTop: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            tag: string;
            borderless: boolean;
            light: boolean;
            dark: boolean;
            border: string | boolean;
            hover: boolean;
            striped: boolean;
            sm: boolean;
            responsive: string | boolean;
            captionTop: boolean;
        }, {}, string> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        variant: StringConstructor;
        dark: {
            type: BooleanConstructor;
            default: boolean;
        };
        light: {
            type: BooleanConstructor;
            default: boolean;
        };
        border: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        borderless: {
            type: BooleanConstructor;
            default: boolean;
        };
        striped: {
            type: BooleanConstructor;
            default: boolean;
        };
        hover: {
            type: BooleanConstructor;
            default: boolean;
        };
        responsive: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        align: StringConstructor;
        sm: {
            type: BooleanConstructor;
            default: boolean;
        };
        tableStyle: StringConstructor;
        captionTop: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    variant: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    align: StringConstructor;
    sm: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableStyle: StringConstructor;
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    tag: string;
    borderless: boolean;
    light: boolean;
    dark: boolean;
    border: string | boolean;
    hover: boolean;
    striped: boolean;
    sm: boolean;
    responsive: string | boolean;
    captionTop: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
