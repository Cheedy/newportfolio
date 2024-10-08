import React from "react";
import { ChevronDown } from "lucide-react";
import Terminal from "../components/Terminal";
import Phone from "../components/Phone";

interface FirstPageProps {
  onShowProjects: () => void;
}

const FirstPage: React.FC<FirstPageProps> = ({ onShowProjects }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <Phone />
        <Terminal />
      </div>
      <button
        onClick={onShowProjects}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Découvrez mes projets
        <ChevronDown className="ml-2" />
      </button>
    </section>
  );
};

export default FirstPage;
