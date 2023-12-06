export default async function Home() {
  return (
    <main>
      <div className="noise absolute left-0 top-0 -z-30 h-screen w-screen rounded-2xl border-4 border-white sm:rounded-[2rem] sm:border-8">
        <div className="fade-in-out absolute -z-10 h-screen w-screen bg-black" />
        <div className="bg-noise absolute -z-30 h-screen w-screen" />
        <div className="top-circle absolute -left-16 -top-16 -z-20 aspect-square rounded-br-full blur-[100px]" />
        <div className="bottom-circle absolute -bottom-16 -right-16 -z-20 aspect-square rounded-tl-full blur-[100px]" />
      </div>
    </main>
  );
}
