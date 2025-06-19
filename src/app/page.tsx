import Glass from "@/components/sections/Glass";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center items-center h-screen font-[family-name:var(--font-geist-sans)] bg-linear-to-br bg-violet-600/20">
      <Glass />
      <div className="absolute top-10 left-10 w-[70vw] h-[60vh] bg-white/20 z-0 hover:z-50 rounded-lg border-1 border-white/50 backdrop-blur-lg"/>
    </div>
  );
}
