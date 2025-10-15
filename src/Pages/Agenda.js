import React from "react";
import agendaBg from '../images/agenda.png';
export default function Agenda(){
    const agenda = [
  { id: 1, title: "About AstraBank", description: "Who we are and what drives us to innovate in the banking industry." },
  { id: 2, title: "Our Vision & Mission", description: "How we empower individuals and businesses through secure, accessible, and digital-first financial solutions." },
  { id: 3, title: "Core Banking Services", description: "Overview of personal, business, and investment banking tailored for every customer need." },
  { id: 4, title: "Digital Transformation", description: "Our technology-driven approach — from AI-powered support to seamless mobile banking experiences." },
  { id: 5, title: "Customer Experience", description: "Building lasting trust through transparent service, quick support, and personalized care." },
  { id: 6, title: "Growth & Impact", description: "Our achievements, milestones, and community initiatives driving inclusive financial growth." },
  { id: 7, title: "Future Roadmap", description: "Our upcoming innovations and sustainability goals for the next decade of digital banking." }
];
    return(
            <div className="flex flex-col min-h-screen relative bg-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${agendaBg})`}}>
                <div className="absolute inset-0 bg-rose-100 bg-opacity-70"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl text-center font-bold my-4">Agenda</h1>
                    <div className="flex flex-row flex-wrap justify-center gap-6">
                    {agenda.map((items)=>(
                        <div key={items.id} className="flex flex-col my-4 w-[60%] max-w-md p-6 bg-rose-100 bg-opacity-100 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">{items.title}</h2>
                        <p className="text-lg">{items.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
)}