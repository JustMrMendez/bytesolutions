import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Laptop,
  Smartphone,
  Zap,
  Brain,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empowering Businesses Through Technology
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  MMByte Solutions delivers innovative, scalable, and efficient
                  solutions that address complex business challenges across
                  various industries.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Laptop className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Custom Software Development
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bespoke solutions tailored to your business needs
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Smartphone className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Mobile App Development
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Intuitive apps for iOS and Android platforms
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Automation Services</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Streamline processes and boost efficiency
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Leverage AI for valuable insights and enhanced experiences
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Technical Consulting</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Expert guidance and strategic technology roadmaps
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Collaborative</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We work closely with our clients to understand their unique
                  requirements.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Client-Centric</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We develop solutions tailored to your specific needs.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Agile Methodology</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We ensure transparency, flexibility, and adaptability
                  throughout the project lifecycle.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">Long-Term Partnership</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We build lasting relationships to ensure your ongoing success.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Ready to transform your business with innovative technology
                  solutions? Contact us today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="email" placeholder="Enter your email" />
                  <Button type="submit">Contact Us</Button>
                </form>
              </div>
              <div className="flex flex-col items-center gap-2 min-[400px]:flex-row">
                <p className="text-gray-500 dark:text-gray-400">
                  info@mmbytes.com
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
