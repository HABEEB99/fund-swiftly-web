import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="w-full h-full wrapper flex-col items-center justify-center bg-yellow-300">
      <div>
        <h1 className="text-3xl md:text-7xl ">
          Discover the power of financial innovation with{" "}
          <span>FundSwiftly</span>,
        </h1>
        <p>your partner in navigating the complexities of modern finance</p>

        <Button variant="main">Begin your journey</Button>
      </div>
    </div>
  );
};

export default HomePage;
