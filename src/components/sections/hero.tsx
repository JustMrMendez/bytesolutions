import { Code, Cog, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Build, Optimize, & Dream Bigger
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Partner with MM Byte Solutions for expert technical consulting and
              unlock your business potential with custom software, automation,
              and AI Integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-purple-900 hover:bg-gray-200">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-purple-900"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Digital Transformation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-transparent opacity-60 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="bg-white p-2 rounded-full">
                <Code className="h-6 w-6 text-purple-900" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <Cog className="h-6 w-6 text-purple-900" />
              </div>
              <div className="bg-white p-2 rounded-full">
                <Rocket className="h-6 w-6 text-purple-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
