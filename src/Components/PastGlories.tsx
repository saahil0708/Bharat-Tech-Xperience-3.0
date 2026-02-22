// "use client";

// import Image from "next/image";
// import upsideDown from "@/Images/upsideDown.jpeg";

// export default function PastGlories() {
//   return (
//     <section
//       suppressHydrationWarning
//       className="relative w-full min-h-screen text-white overflow-hidden z-10"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src={upsideDown}
//           alt="background"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Content */}
//       <div className="relative px-6 md:px-20 py-20">

//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-bold text-red-500 tracking-widest drop-shadow-[0_0_25px_red]">
//             PAST GLORIES
//           </h2>
//         </div>

//         {/* Lightning Line */}
//         <div className="relative flex justify-between items-center mb-20">
//           <div className="absolute top-5 left-0 w-full h-1 bg-red-600 shadow-[0_0_20px_red]" />

//           {["WINNER", "2ND PLACE", "3RD PLACE"].map((label) => (
//             <div key={label} className="relative text-center w-1/3">
//               <div className="w-6 h-6 bg-red-600 rounded-full mx-auto shadow-[0_0_20px_red]" />
//               <p className="mt-4 text-lg tracking-wider">{label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {/* CARD 1 */}
//           <div className="bg-[#2a1f1f]/90 p-6 rounded-lg border border-red-800 shadow-xl">
//             <Image
//               src={upsideDown}
//               alt="Winner"
//               width={500}
//               height={300}
//               className="rounded mb-4"
//             />
//             <h3 className="text-2xl font-bold">HACKATHON XYZ 2023</h3>
//             <p className="mt-2 text-gray-300">Location: XYZ University</p>
//             <p className="text-gray-300">Achievement: 1st Place</p>
//             <div className="mt-4 text-red-500 font-bold border border-red-500 inline-block px-4 py-1 rotate-[-10deg]">
//               CLASSIFIED
//             </div>
//           </div>

//           {/* CARD 2 */}
//           <div className="bg-[#2a1f1f]/90 p-6 rounded-lg border border-red-800 shadow-xl">
//             <Image
//               src={upsideDown}
//               alt="Runner Up"
//               width={500}
//               height={300}
//               className="rounded mb-4"
//             />
//             <h3 className="text-2xl font-bold">NATIONAL CONTEST</h3>
//             <p className="mt-2 text-gray-300">Location: DEF Tech Institute</p>
//             <p className="text-gray-300">Achievement: Runner-Up</p>
//             <div className="mt-4 text-red-500 font-bold border border-red-500 inline-block px-4 py-1 rotate-[-10deg]">
//               CLASSIFIED
//             </div>
//           </div>

//           {/* CARD 3 */}
//           <div className="bg-[#2a1f1f]/90 p-6 rounded-lg border border-red-800 shadow-xl">
//             <Image
//               src={upsideDown}
//               alt="Third Place"
//               width={500}
//               height={300}
//               className="rounded mb-4"
//             />
//             <h3 className="text-2xl font-bold">INNOVATION FAIR</h3>
//             <p className="mt-2 text-gray-300">Location: GHI College</p>
//             <p className="text-gray-300">Achievement: 3rd Place</p>
//             <div className="mt-4 text-red-500 font-bold border border-red-500 inline-block px-4 py-1 rotate-[-10deg]">
//               CLASSIFIED
//             </div>
//           </div>

//         </div>

//         {/* Bottom Stats */}
//         <div className="grid md:grid-cols-3 text-center mt-20 border-t border-red-900 pt-10">
//           <div>
//             <h4 className="text-5xl text-red-500 font-bold">08</h4>
//             <p className="text-gray-400">TOTAL WINS</p>
//           </div>
//           <div>
//             <h4 className="text-5xl text-red-500 font-bold">12</h4>
//             <p className="text-gray-400">FINALISTS</p>
//           </div>
//           <div>
//             <h4 className="text-5xl text-red-500 font-bold">20+</h4>
//             <p className="text-gray-400">PROJECTS BUILT</p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }