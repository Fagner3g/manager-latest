import { CardSummaryProps } from "./CardSummary.type";

import { CustomIcon } from "@/components/custom-icon";
import { CustomTootip } from "@/components/custom-tootip";

export function CardSummary(props: CardSummaryProps) {
  const { evarage, icon, title, tootipText, total } = props;
  return (
    <div className="rounded-lg bg-background p-5 py-3 shadow-sm transition hover:shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <CustomIcon icon={icon} />
          {title}
        </div>
        <CustomTootip content={tootipText} />
      </div>
      <div className="mt-2 flex gap-4 md:mt-4">
        <p className="text-2xl">{total}</p>
        <div className="flex h-[20px] items-center gap-1 rounded-lg bg-black px-2 text-xs text-white dark:bg-secondary">
          {evarage}%
        </div>
      </div>
    </div>
  );
}
