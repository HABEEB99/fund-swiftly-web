import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-sm md:text-lg text-transparent py-1 bg-clip-text bg-gradient-to-r 
      from-orange-600 font-bold to-green-900"
    >
      FundSwiftly
    </Link>
  );
};
