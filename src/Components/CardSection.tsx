import ElectricBorder from '@/Components/ElectricBorder ';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a0a1f] via-[#0f0515] to-[#000000] flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full">
        {/* Card 1 */}
        <ElectricBorder 
          color="#ff0000" 
          speed={1} 
          chaos={0.12} 
          borderRadius={24}
          className="w-full"
        >
          <div className="bg-gradient-to-br from-[#2d1a2e]/80 via-[#1f0f20]/90 to-[#0a0510]/95 backdrop-blur-sm p-16 rounded-[24px] min-h-[450px] flex flex-col justify-center">
            {/* Heading */}
            <h1 className="text-5xl font-bold text-white mb-6">
              Electric Card
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl font-semibold text-gray-300 mb-8">
              Shocking Design Elements
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 text-lg leading-relaxed">
              An electric border for shocking your users, the right way. Experience the perfect blend of dynamic animations and modern design that captivates attention while maintaining elegance.
            </p>
          </div>
        </ElectricBorder>

        {/* Card 2 */}
        <ElectricBorder 
          color="#ff0000" 
          speed={1} 
          chaos={0.12} 
          borderRadius={24}
          className="w-full"
        >
          <div className="bg-gradient-to-br from-[#2d1a2e]/80 via-[#1f0f20]/90 to-[#0a0510]/95 backdrop-blur-sm p-16 rounded-[24px] min-h-[450px] flex flex-col justify-center">
            {/* Heading */}
            <h1 className="text-5xl font-bold text-white mb-6">
              Electric Card
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl font-semibold text-gray-300 mb-8">
              Shocking Design Elements
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 text-lg leading-relaxed">
              An electric border for shocking your users, the right way. Experience the perfect blend of dynamic animations and modern design that captivates attention while maintaining elegance.
            </p>
          </div>
        </ElectricBorder>
      </div>
    </main>
  );
}