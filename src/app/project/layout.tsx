export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex flex-row h-full'>
      <div className='w-32 h-full bg-neutral-800 bordered-r shadow-xl shadow-black/30'>
        AAA
      </div>

      {children}
    </section>
  );
}
