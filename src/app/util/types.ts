export type Listener<T = unknown> = (event?: T) => void;

export type ComponentProps <T>  = {
    parent: HTMLElement | null
    tag: T
    className: string
    content: string
}