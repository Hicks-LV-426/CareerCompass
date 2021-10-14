export interface CompassItem {
    name: string;
    type: string;
    url: string | null | undefined;
    items: CompassItem[]
}
