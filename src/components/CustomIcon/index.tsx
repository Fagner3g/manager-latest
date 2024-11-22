import { CustomIconProps } from "./types";

export function CustomIcon({ icon: Icon }: CustomIconProps) {
  return (
    <div className="rounded-lg bg-slate-400/20 p-2">
      <Icon strokeWidth="1" className="h-4 w-4" />
    </div>
  );
}
