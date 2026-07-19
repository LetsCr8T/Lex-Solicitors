import {
  FormField,
  type FormFieldOption,
} from "@/components/landing/Contact/FormField";
import { services } from "@/data/services";

export const GENERAL = "General enquiry";

const AREA_OPTIONS: FormFieldOption[] = [
  { value: GENERAL, label: GENERAL },
  ...services.map((s) => ({ value: s.title, label: s.title })),
];

export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
  company: string;
}

export type FieldErrors = Partial<
  Record<"fullName" | "email" | "message", string>
>;

export interface ConsultationFieldsProps {
  values: FormValues;
  errors: FieldErrors;
  onField: (key: keyof FormValues) => (value: string) => void;
}

/** The consultation form's fields (incl. the visually-hidden honeypot). */
export function ConsultationFields({
  values,
  errors,
  onField,
}: ConsultationFieldsProps) {
  return (
    <>
      <FormField
        id="fullName"
        name="fullName"
        label="Full name"
        required
        autoComplete="name"
        value={values.fullName}
        onChange={onField("fullName")}
        error={errors.fullName}
      />
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        value={values.email}
        onChange={onField("email")}
        error={errors.email}
      />
      <FormField
        id="phone"
        name="phone"
        label="Phone (optional)"
        type="tel"
        autoComplete="tel"
        value={values.phone}
        onChange={onField("phone")}
      />
      <FormField
        id="practiceArea"
        name="practiceArea"
        label="Practice area"
        as="select"
        options={AREA_OPTIONS}
        value={values.practiceArea}
        onChange={onField("practiceArea")}
      />
      <FormField
        id="message"
        name="message"
        label="How can we help?"
        as="textarea"
        required
        value={values.message}
        onChange={onField("message")}
        error={errors.message}
      />

      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(e) => onField("company")(e.target.value)}
        />
      </div>
    </>
  );
}
