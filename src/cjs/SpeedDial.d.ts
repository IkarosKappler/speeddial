/**
 * @author  Ikaros Kappler
 * @date    2021-12-08
 * @version 1.0.0
 */
export declare class SpeedDial {
    private buttonSize;
    private gapSize;
    private rootNode;
    private _buttons;
    constructor();
    addActionButton(label: string, onClick: () => void): void;
    static showDial(dial: SpeedDial): void;
    static hideDial(dial: SpeedDial): void;
    static createRootNode(dial: SpeedDial): HTMLDivElement;
    static createButtonNode: (dial: SpeedDial, onClick: () => void) => HTMLButtonElement;
}
