import Checkbox from "../Checkbox";
import type { CheckboxProps } from "../type";

interface Props {
  checkBoxData: CheckboxProps[];
}

const NotificationSection = ({ checkBoxData }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-35 border-b-[0.5px] border-b-white/30 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold">Notification</h1>
        <p className="text-white/70">
          This is where you'll receive Notifications
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {checkBoxData.map((checkbox) => (
          <Checkbox
            key={checkbox.heading}
            heading={checkbox.heading}
            description={checkbox.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSection;
