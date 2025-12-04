export function usePlotly(props: any): {
    drawPlot: () => Promise<void>;
    updatePlot: () => Promise<void>;
};
