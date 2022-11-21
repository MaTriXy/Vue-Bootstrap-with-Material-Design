declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            small: boolean;
            tag: string;
            flush: boolean;
            horizontal: string | boolean;
            light: boolean;
            numbered: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            flush: {
                type: BooleanConstructor;
                default: boolean;
            };
            horizontal: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            numbered: BooleanConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            light: BooleanConstructor;
            small: BooleanConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "small" | "tag" | "flush" | "horizontal" | "light" | "numbered">;
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
            flush: {
                type: BooleanConstructor;
                default: boolean;
            };
            horizontal: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            numbered: BooleanConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            light: BooleanConstructor;
            small: BooleanConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            small: boolean;
            tag: string;
            flush: boolean;
            horizontal: string | boolean;
            light: boolean;
            numbered: boolean;
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
        flush: {
            type: BooleanConstructor;
            default: boolean;
        };
        horizontal: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        numbered: BooleanConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        light: BooleanConstructor;
        small: BooleanConstructor;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    flush: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    numbered: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    light: BooleanConstructor;
    small: BooleanConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    small: boolean;
    tag: string;
    flush: boolean;
    horizontal: string | boolean;
    light: boolean;
    numbered: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
