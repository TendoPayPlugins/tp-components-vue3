import { ref, onMounted, watch } from 'vue'

export function usePlotly(props) {
    const plotlyInstance = ref(null)
    let Plotly = null

    const loadPlotly = async () => {
        if (typeof window === 'undefined') return // SSR/Histoire-safe
        if (Plotly) return Plotly

        Plotly = (await import('plotly.js-dist-min')).default
        return Plotly
    }

    const drawPlot = async () => {
        if (typeof window === 'undefined') return
        const P = await loadPlotly()
        if (!P) return

        P.newPlot(
            props.id,
            props.getData(),
            props.layout || {},
            {
                showSendToCloud: true,
                responsive: true,
            }
        )
    }

    const updatePlot = async () => {
        if (typeof window === 'undefined') return
        const P = await loadPlotly()
        if (!P) return

        P.react(
            props.id,
            props.getData(),
            props.layout || {},
            {
                responsive: true,
                modeBarButtonsToRemove: ['toImage'],
                displaylogo: false,
            }
        )
    }

    onMounted(() => {
        drawPlot()
    })

    watch(
        () => props,
        () => {
            updatePlot()
        },
        { deep: true }
    )

    return {
        drawPlot,
        updatePlot,
    }
}
