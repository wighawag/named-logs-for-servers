export type Logger = {
    readonly assert: (condition?: boolean, ...data: any[]) => void;
    readonly error: (...data: any[]) => void;
    readonly warn: (...data: any[]) => void;
    readonly info: (...data: any[]) => void;
    readonly log: (...data: any[]) => void;
    readonly debug: (...data: any[]) => void;
    readonly dir: (item?: any, options?: any) => void;
    readonly table: (tabularData?: any, properties?: string[]) => void;
    readonly trace: (...data: any[]) => void;
    readonly write: (msg: string) => void;
    readonly time: (label: string) => void;
    readonly timeEnd: (label: string) => void;
    readonly timeLog: (label?: string) => void;
};
type LoggerFactory = (namespace: string) => Logger;
export type CLogger = Logger & {
    level: number;
    enabled: boolean;
};
type MiniLogger = {
    readonly error: (...data: any[]) => void;
    readonly warn: (...data: any[]) => void;
    readonly info: (...data: any[]) => void;
    readonly log: (...data: any[]) => void;
    readonly debug: (...data: any[]) => void;
};
export declare function runWithLogger<T extends Promise<unknown> | unknown>(logger: MiniLogger, callback: () => T): T;
export declare const factory: {
    (namespace: string): CLogger;
    level: number;
    disable: () => void;
    enable: (namespaces?: string) => void;
};
export declare function hookup(): void;
export declare function hook(factory: LoggerFactory): void;
export declare function logs(namespace: string, options?: {
    fallbackOnProxy?: boolean | string;
}): Logger;
export {};
//# sourceMappingURL=index.d.ts.map