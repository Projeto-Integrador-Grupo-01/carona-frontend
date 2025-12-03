export default function Banner() {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://c.animaapp.com/mioyt1jyAPQkPY/img/ai_2.png"
                    alt="ridesharing banner"
                    className="w-full h-full object-cover"
                    loading="eager"
                />

                {/* Overlay com gradiente verde -> laranja */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 via-emerald-500/60 to-orange-500/80" />
            </div>

            {/* Conteúdo */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Mobilidade com propósito: compartilhando caminhos.
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Promovendo experiências de carona corporativa mais seguras e conectadas.
                    </p>
                </div>
            </div>
        </section>
    );
}