export interface MenuNode {
    name: string;
    type: number;
    files?: string;
    childs?: MenuNode[];
}