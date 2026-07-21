import { Check } from "lucide-react";

export interface CapabilityListProps {
  capabilities: string[];
}

/** Check-marked list of a practice area's capabilities (shared by both the
 *  always-on desktop view and the mobile Disclosure). */
export function CapabilityList({ capabilities }: CapabilityListProps) {
  return (
    <ul className="flex flex-col gap-2.5">
      {capabilities.map((capability) => (
        <li
          key={capability}
          className="flex items-start gap-2.5 text-sm text-body"
        >
          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
          <span>{capability}</span>
        </li>
      ))}
    </ul>
  );
}
