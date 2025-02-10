/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme")

// Workaround for errors in consoles
delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

const plugin = require("tailwindcss/plugin");

module.exports = {
    prefix: 'tc-',
    content: [
        './index.html',
        './src/components/**/*.{js,jsx,ts,tsx,html,js,vue}',
        './node_modules/vue-tailwind-datepicker/**/*.js',
        './node_modules/flowbite/**/*.js'
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                ...colors,
                transparent: "transparent",
                "tp-primary": "#25a5f1",
                "tp-primary-dark": "#25a3ff",
                "tp-primary-light": "#dbf1fe",
                "tp-secondary": "#00ffc4",
                "tp-secondary-dark": "#29f1c3",
                "tp-grey-100": "#fcfcfd",
                "tp-grey-200": "#f3f6f8",
                "tp-grey-300": "#e2e8ec",
                "tp-grey-400": "#a1b4c2",
                "tp-grey-600": "#4d5a64",
                "tp-grey-800": "#1f2931",
                "tp-purple-200": "#f2eeff",
                "tp-purple-400": "#baa3fa",
                "tp-purple-800": "#3a1e68",
                "error": "#e44c4c",
                "error-light": "#ffc3c3",
                "google": "#dc4b38",
                "facebook": "#4267b2",
                "apple": "#333333",
                "playstore": "#01875f",
                "vtd-primary": colors.sky, // Light mode Datepicker color
                "vtd-secondary": colors.gray, // Dark mode Datepicker color,
                "tendo-blue": "#3d9dff",
                "tonik-purple": "#785aff",
                "tonik-purple-dark": "#6847fd",
                'light-blue-1': '#DBF1FE',
                "blue-1": "#3336e3",
                "blue-2": "#555af1",
                "blue-3": "#2e6aab",
                "blue-4": "#2f196a",
                "green-1": "#73f5d7",
                "green-2": "#70d3a6",
                "green-3": "#25d4db",
                "green-4": "#01d2ed",
                "pink": "#fd95f8",
                "yellow-1": "#fcda85",
                "yellow-2": "#cbce23",
                "yellow-3": "#f7d365",
                "black": "#101010",
                "grey-1": "#a1b4c2",
                "grey-2": "#f3f6f8",
                'info': '#C5E0FA',
                'success': '#08925b',
            },
            screens: {
                "max-sm": {
                    max: "639px"
                },
                // => @media (max-width: 639px) { ... }

                "max-md": {
                    max: "767px"
                },
                // => @media (max-width: 767px) { ... }

                "max-lg": {
                    max: "1023px"
                },
                // => @media (max-width: 1023px) { ... }

                "max-xl": {
                    max: "1279px"
                },
                // => @media (max-width: 1279px) { ... }
            },
            borderRadius: {
                inherit: "inherit",
            },
            lineHeight: {
                "extra-relaxed": "1.7",
            },
            minHeight: {
                6: "1.5rem",
                "screen-60": "60vh",
                "screen-75": "75vh",
                "330-px": "330px",
                "400-px": "400px",
                "480-px": "480px",
                "500-px": "500px",
                "700-px": "700px",
            },
            translate: {
                "-1/5": "-20%",
                "1/5": "20%",
            },
            letterSpacing: {
                875: "0.875rem",
            },
            fontSize: {
                "xxs": "10px",
                10: "10rem",
                12: "12rem",
                55: "55rem",
                1625: "1.625rem",
            },
            opacity: {
                4: "0.04",
                15: "0.15",
                65: ".65",
                85: ".85",
            },
            zIndex: {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                10: 10,
                15: 15,
                20: 20,
                25: 25,
                9998: 9998,
                9999: 9999,
            },
            inset: {
                "-94-px": "-94px",
                "-64-px": "-64px",
                "-24-px": "-24px",
                "280-px": "280px",
                "320-px": "320px",
                "-1/25": "-4%",
                0: "0",
                "1/100": "1%",
                "1/50": "2%",
                "1/25": "4%",
                "1/20": "5%",
                "7/100": "7%",
                "1/10": "10%",
                "7/20": "35%",
                "9/25": "36%",
                "19/50": "38%",
                "11/25": "44%",
            },
            height: {
                "screen-50": "50vh",
                "70-px": "70px",
                "95-px": "95px",
                "140-px": "140px",
                "300-px": "300px",
                "330-px": "330px",
                "350-px": "350px",
                "400-px": "400px",
                "430-px": "430px",
                "500-px": "500px",
                "530-px": "530px",
                "550-px": "550px",
                "600-px": "600px",
                "auto-important": "auto !important",
                "full-500": "500%",
            },
            maxHeight: {
                "440-px": "440px",
                "700-px": "700px",
                "999-px": "999px",
                "screen-70": "70vh",
            },
            width: {
                double: "200%",
                "100-px": "100px",
                "170-px": "170px",
                "450-px": "450px",
                "650-px": "650px",
                "768-px": "768px",
                "850-px": "850px",
                "full-500": "500%",
                "form": "500px",
            },
            maxWidth: {
                "40-px": "40px",
                "64-px": "64px",
                "100-px": "100px",
                "120-px": "120px",
                "150-px": "150px",
                "250-px": "250px",
                "360-px": "360px",
            },
            minWidth: {
                "140-px": "140px",
                48: "12rem",
                "lg": "32rem",
                "xl": "36rem",
                "2xl": "42rem",
                "5xl": "64rem",
            },
            backgroundSize: {
                full: "100%",
                "20-full-auto": "20% auto",
            },
            backgroundPosition: {
                "50-center": "50% center",
                "50-top": "50% top",
                50: "50%",
                "center-top": "center top",
                100: "100%",
            },
            spacing: {
                "50-px": "50px",
                "-220-px": "-220px",
                17: "4.25rem",
            },
            animation: {
                "index-image": "indexImage 20s linear infinite",
            },
            keyframes: {
                indexImage: {
                    "0%": {
                        transform: "translateY(0)",
                    },
                    "100%": {
                        transform: "translateY(-100%)",
                    },
                },
            },
            fontFamily: {
                'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    variants: [
        "responsive",
        "group-hover",
        "group-focus",
        "focus-within",
        "first",
        "last",
        "odd",
        "even",
        "hover",
        "focus",
        "active",
        "visited",
        "disabled",
        "checked",
    ],
    plugins: [
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
        plugin(function ({
                             addUtilities,
                             addComponents,
                             theme
                         }) {
            const screens = theme("screens", {});
            addComponents(
                [{
                    [`@media (max-width: ${screens["max-lg"]["max"]})`]: {
                        ".static-important": {
                            position: "static !important",
                        },
                    },
                },
                    {
                        [`@media (max-width: ${screens["max-lg"]["max"]})`]: {
                            ".transform-none-important": {
                                transform: "none !important",
                            },
                        },
                    },
                ], {
                    respectPrefix: false,
                }
            );
        }),
    ],
}

