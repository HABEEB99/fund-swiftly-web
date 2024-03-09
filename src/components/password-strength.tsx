import { cn } from "@/lib/utils";

interface IPasswordStrength {
  passStrength: number;
}

export const PasswordStrength: React.FC<IPasswordStrength> = ({
  passStrength,
}) => {
  return (
    <div className="flex gap-3">
      {Array.from({ length: passStrength + 1 }).map((i, index) => (
        <div
          key={index}
          className={cn("h-3 w-32 rounded-md", {
            "bg-red-600": passStrength === 0,
            "bg-orange-600": passStrength === 1,
            "bg-yellow-600": passStrength === 2,
            "bg-green-600": passStrength === 3,
          })}
        ></div>
      ))}
    </div>
  );
};
