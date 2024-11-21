import { CardSummary } from "./components/CardSummary";

import { UserRound } from "lucide-react";

const data = [
  {
    icon: UserRound,
    total: "12.30",
    evarage: 15,
    title: "Cria o de usu rios",
    tootipText: "Cria o de usu rios em massa",
  },
  {
    icon: UserRound,
    total: "120.00",
    evarage: 25,
    title: "Cria o de empresas",
    tootipText: "Cria o de empresas em massa",
  },
  {
    icon: UserRound,
    total: "1.200",
    evarage: 35,
    title: "Cria o de oportunidades",
    tootipText: "Cria o de oportunidades em massa",
  },
];

export default function Dashboard() {
  return (
    <div className="gitd-cols-1 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4">
      {data.map(({ evarage, icon, title, tootipText, total }) => (
        <CardSummary key={title} icon={icon} total={total} evarage={evarage} title={title} tootipText={tootipText} />
      ))}
    </div>
  );
}
