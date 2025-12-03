import React, { type ReactNode } from "react";

import alineImg from "../../assets/aline.jpeg";
import cintiaImg from "../../assets/cintia.jpeg";
import nicollyImg from "../../assets/nicolly.jpeg";
import rafaelaImg from "../../assets/rafaela.jpeg";
import querenImg from "../../assets/queren.jpeg";

type TeamMember = {
    description: ReactNode;
    id: number;
    name: string;
    linkedin: string;
    photo: string;
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Aline Romanini",
        linkedin: "https://www.linkedin.com/m/in/aline-romanini/",
        photo: alineImg,
        description: "Na TechSisters, lideramos juntas: mulheres impulsionando propósito, inovação e colaboração.",
    },
    {
        id: 2,
        name: "Cintia Dourado",
        linkedin: "https://www.linkedin.com/in/cintia-douradom/",
        photo: cintiaImg,
        description: "Na TechSisters, sigo guiada pelo equilíbrio entre sensibilidade e estratégia, movida pelos sonhos que me norteiam.",
    },
    {
        id: 3,
        name: "Nicolly Jesus",
        linkedin: "https://www.linkedin.com/m/in/nicolly-jesus/",
        photo: nicollyImg,
        description: "Quando mulheres lideram, o caminho é mais seguro, colaborativo e cheio de propósito — GoTogether. ",
    },
    {
        id: 4,
        name: "Rafaela Lemes",
        linkedin: "https://www.linkedin.com/in/rafamorais/",
        photo: rafaelaImg,
        description: "Na Tech Sisters mulheres aceleram ideias, conectam pessoas e transformam o futuro da tecnologia.",
    },
    {
        id: 5,
        name: "Queren Alves",
        linkedin: "https://www.linkedin.com/in/querenhalves/",
        photo: querenImg,
        description: "------",
    },
];


const SobreEquipe: React.FC = () => {
    return (
        <main className="min-h-screen bg-[#f3f4f6]">
            <section className="mx-auto max-w-6xl px-6 py-12 md:px-8">
                {/* TÍTULO + SUBTÍTULO (igual estrutura do About do print) */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-semibold text-[#256029]">
                        Sobre Tech Sisters
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                        O Tech Sisters é um grupo de mulheres apaixonadas por tecnologia! Unidas com o propósito de inovar e gerar soluções criativas, desde 2025, através do Bootcamp Full Stack da Generation.
                    </p>
                </div>

                {/* GRID DOS CARDS */}
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="w-full sm:w-1/2 lg:w-1/3 max-w-sm"
                        >
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_18px_45px_rgba(15,23,42,0.06)] px-8 py-10 flex flex-col items-center text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e6f4ea] overflow-hidden">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base md:text-lg font-semibold text-gray-900 hover:underline"
                                >
                                    {member.name}
                                </a>


                                <p className="mt-3 text-sm text-gray-600">
                                    {member.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
};

export default SobreEquipe;
