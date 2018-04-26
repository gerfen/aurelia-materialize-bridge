import * as au from "../aurelia";
export declare class MdCheckbox {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    attributeManager: au.AttributeManager;
    checkbox: HTMLInputElement;
    mdChecked?: boolean | any[];
    mdDisabled: boolean;
    mdDisabledChanged(newValue: any): void;
    mdReadonly: boolean;
    mdReadonlyChanged(): void;
    mdFilledIn: boolean;
    mdMatcher: (a: any, b: any) => boolean;
    mdModel: any;
    attached(): void;
    detached(): void;
    preventChange(this: HTMLInputElement): void;
}
