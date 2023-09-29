global.console = {
    ...console,
    error: jest.fn(),
};

global.document.execCommand = () => true;

document.createRange = () => {
    const range = new Range();

    range.getBoundingClientRect = jest.fn();

    range.getClientRects = () => {
        return {
            item: () => null,
            length: 0,
            [Symbol.iterator]: jest.fn(),
        };
    };

    const rect: DOMRect = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    } as DOMRect;

    range.getBoundingClientRect = (): DOMRect => rect;

    return range;
};
