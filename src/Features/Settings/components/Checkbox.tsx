import type { CheckboxProps } from "./type";

const Checkbox = ({ heading, description }: CheckboxProps) => {
  return (
    <div>
      <div className="flex gap-2">
        <input type="checkbox" className="rounded-xl" />
        <h1>{heading}</h1>
      </div>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
};

export default Checkbox;
