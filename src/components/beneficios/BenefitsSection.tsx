import { Flag, Leaf, PersonArmsSpreadIcon, PiggyBank, Shield, Users } from "@phosphor-icons/react";


export default function BenefitsSection() {
    const benefits = [
        {
            icon: PiggyBank,
            title: 'Economia',
            description: 'Redução de custos com os benefícios de mobilidade',
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            icon: PersonArmsSpreadIcon,
            title: 'Acessibilidade',
            description: 'Garantir a acessibilidade para os passageiros é nossa prioridade',
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            icon: Users,
            title: 'Conectividade',
            description: 'Conexão de colaboradores com rotinas compatíveis promovendo a integração',
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            icon: Flag,
            title: 'Inovação',
            description: 'Apps e estudos de gestão de mobilidade corporativa que se adaptam às rotinas dos seus colaboradores',
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
        {
            icon: Leaf,
            title: 'Sustentabilidade',
            description: 'Mobilidade mais eficiente com menos automóveis na rua',
            color: 'text-teal-600',
            bgColor: 'bg-teal-100',
        },
    ];

    return (
        <section id="benefits" className="py-12 md:py-16 lg:py-24 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-h1 md:text-4xl text-[#256029] font-semibold text-foreground mb-12 text-center">
                    A Mobilidade Corporativa pela Qualidade de Vida
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center lg:justify-center">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center h-full"
                            >
                                <div className={`p-4 rounded-full ${benefit.bgColor} mb-4`}>
                                    <Icon className={`h-12 w-12 ${benefit.color}`} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-3">
                                    {benefit.title}
                                </h3>

                                <p className="text-body text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
