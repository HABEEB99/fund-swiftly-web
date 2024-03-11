import { Logo, ThemeSwitcher, UserMenu } from "@/components";

export const Header = () => {
  return (
    <header className="w-screen h-[8vh] wrapper flex items-center justify-between">
      <Logo />

      <div className="flex items-center justify-center space-x-3">
        <ThemeSwitcher />
        <UserMenu />
      </div>
    </header>
  );
};
