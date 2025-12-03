// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Fundo do gradiente (esquerda → direita)
                primary: "#079B4C",              // verde
                secondary: "#F47C20",            // laranja
                "primary-foreground": "#FFFFFF", // texto em cima do banner
            },
            fontFamily: {
                // use o que você estiver usando no projeto
                sans: ["Inter", "system-ui", "sans-serif"],
                secondary: ["Inter", "system-ui", "sans-serif"],
            },
            fontSize: {
                // usado em: text-h1
                h1: [
                    "2.5rem", // 40px (base)
                    {
                        lineHeight: "1.1",
                        fontWeight: "700",
                    },
                ],
            },
        },
    },
    plugins: [],
};
