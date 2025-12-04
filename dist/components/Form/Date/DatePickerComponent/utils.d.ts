import { InjectionKey } from 'vue';

export declare function injectStrict<T>(key: InjectionKey<T>, fallback?: T): NonNullable<T>;
export declare const localesMap: Record<string, () => Promise<ILocale>>;
