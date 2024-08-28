import { Code, Cog, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "/public/hero-mockup.png";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Build, Optimize, & Dream Bigger
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Partner with MM Byte Solutions for expert technical consulting and
              unlock your business potential with custom software, automation,
              and AI Integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="">
                Get Started
              </Button>
              <Button variant="ghost" className="">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative min-h-[400px] w-full">
            <Image
              src={HeroImage}
              alt="Digital Transformation"
              layout="fill"
              objectFit=""
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-transparent from-10% to-40% opacity-30 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <Button className={cn("bg-white p-2 rounded-full", "")}>
                <Code className="h-6 w-6 text-purple-900" />
              </Button>
              <Button className={cn("bg-white p-2 rounded-full", "")}>
                <Cog className="h-6 w-6 text-purple-900" />
              </Button>
              <Button className={cn("bg-white p-2 rounded-full", "")}>
                <Rocket className="h-6 w-6 text-purple-900" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
