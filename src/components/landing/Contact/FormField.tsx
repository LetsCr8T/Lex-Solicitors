import { cn } from "@/lib/utils";

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  as?: "input" | "textarea" | "select";
  type?: "text" | "email" | "tel";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  rows?: number;
  options?: FormFieldOption[];
}

const control =
  "w-full rounded-md border bg-background px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none";

/** Labelled input / textarea / select with an inline error slot (a11y-wired). */
export function FormField({
  id,
  name,
  label,
  as = "input",
  type = "text",
  value,
  onChange,
  error,
  required,
  autoComplete,
  rows = 5,
  options,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    required,
    value,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(control, error ? "border-destructive" : "border-input"),
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>

      {as === "textarea" ? (
        <textarea
          {...shared}
          rows={rows}
          className={cn(shared.className, "resize-y")}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : as === "select" ? (
        <select {...shared} onChange={(e) => onChange(e.target.value)}>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...shared}
          type={type}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
