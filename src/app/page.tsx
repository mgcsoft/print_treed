import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Leaf, Recycle, Clock, Hammer, ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/visualisation2.jpg"
            alt="3D printed wood structure in forest setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">TreeD</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-8">
            3D Wood Printing for the Built Environment
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8">
            Providing architects and the construction industry the freedom to design without limitations through
            innovative 3D printable wooden paste technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white cursor-pointer">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 cursor-pointer">
              Our Team
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Long-Term Vision</h2>
              <p className="text-lg text-amber-950/80 mb-6">
                Our project aims to provide architects and the construction industry the freedom to design without
                limitations. Here at TreeD, we aim to make the creation of unique, non-traditional wooden parts possible
                through the development of a 3D printable wooden paste, an elaborated building technology!
              </p>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Problem Statement</h3>
              <p className="text-lg text-amber-950/80">
                The construction industry is currently limited by traditional timber and requires a solution to unlock
                new design possibilities of organic shapes; therefore, an unconventional building technology needs to be
                developed. We believe that our project could be the key solution to this problem: 3D printed wood!
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/visualisation1.jpg"
                  alt="3D printed wood structure visualization"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Our Goals</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-amber-100 p-2 rounded-full">1</span>
                  Material Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop a 3D printable wood-based paste, structurally sound when extruded</p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-amber-100 p-2 rounded-full">2</span>
                  Design Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create a design of a 3D structure, printable using our paste</p>
              </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-amber-100 p-2 rounded-full">3</span>
                  Large Scale Printing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Print it large scale to showcase this building technology</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Side Benefits</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-700 p-4 rounded-full mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-2">Sustainable</h3>
              <p>More sustainable building material for eco-friendly construction</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-700 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-2">Cost Efficient</h3>
              <p>Benefit of reduced labor costs and construction risks</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-700 p-4 rounded-full mb-4">
                <Hammer className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-2">Automated</h3>
              <p>Automatization of processes for efficient production</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-amber-700 p-4 rounded-full mb-4">
                <Recycle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-2">Waste Reduction</h3>
              <p>Minimizes material waste compared to traditional methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Our Process</h2>

          <Tabs defaultValue="material" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="material">Material Development</TabsTrigger>
              <TabsTrigger value="printer">Printer Adjustments</TabsTrigger>
            </TabsList>
            <TabsContent value="material" className="p-4 bg-amber-50 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Material Development Process</h3>
                  <p className="text-lg text-amber-950/80">
                    Material development consists of many stages and processes, however it highly depends on iterative
                    approach: preparing material, testing and analysing its properties in various states (in fluid to
                    know its extrusion properties and in solid to know its structural ones), as well as drawing
                    conclusions and creating new iterations of the materials.
                  </p>
                </div>
                <div className="md:w-1/2 bg-amber-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">Key Stages:</h4>
                  <ul className="space-y-2 text-amber-950/80">
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Material composition research and selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Testing extrusion properties in fluid state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Analyzing structural properties in solid state</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Iterative improvements based on test results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="printer" className="p-4 bg-amber-50 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Printer Adjustments</h3>
                  <p className="text-lg text-amber-950/80">
                    Willing to fully automatise printing process, the extrusion must also be automatised. We did it
                    through an addition of an extra motor, connecting to the extruder part, allowing the material
                    extrusion happen not manually and controlling through code commands.
                  </p>
                </div>
                <div className="md:w-1/2 bg-amber-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-amber-900 mb-3">Key Modifications:</h4>
                  <ul className="space-y-2 text-amber-950/80">
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Addition of extra motor for automated extrusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Custom extruder design for wood-based paste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Software integration for precise control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-200 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>Calibration for optimal extrusion parameters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[{ name: "Ana Cirligeanu", image: "/Ana.jpeg" },
            { name: "Maria Nicorescu", image: "/Maria.jpeg" },
            { name: "Mazen Ahmed", image: "/Mazen.jpeg" },
            { name: "Rehaf El Rekabija", image: "/Rehaf.jpeg" },
            { name: "Signe Banga", image: "/Signe.jpeg" }].map(
              (member, index) => (
                <Card key={index} className="bg-white border-amber-200 shadow-none">
                  <CardHeader className="pb-2">
                    <div className="w-full aspect-square rounded-md mb-3 flex items-center justify-center">
                      <Image src={member.image} className="rounded-full" alt={member.name} width={250} height={250} />
                    </div>
                    <CardTitle className="text-center text-lg">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">Honor Student at TUE</CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">TreeD</h2>
              <p className="text-amber-100">3D Wood Printing for the Built Environment</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-amber-100 mb-2">Eindhoven University of Technology</p>
              <p className="text-amber-100">Honor Student Team Project</p>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; {new Date().getFullYear()} TreeD Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}