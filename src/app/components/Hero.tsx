import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-32 md:grid-cols-2 md:pb-24 md:pt-36">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Hello, I&apos;m {profile.name}, a {profile.role}
          </h1>
          <p className="mt-5 max-w-md text-white/85">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-accent px-7 py-3 font-semibold text-ink hover:brightness-95">View my work</a>
            <a href="#contact" className="rounded-full border border-white/60 px-7 py-3 font-semibold hover:bg-white/10">Contact me</a>
          </div>
        </div>
        <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
          <div className="absolute -right-4 top-4 h-full w-full rounded-full bg-accent" />
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-full border-4 border-white/30">
            <Image src="/abdullah.jpg" alt="Portrait of M. Abdullah Waheed" fill priority sizes="384px" className="object-cover object-top" />
          </div>
          <div className="absolute -left-2 bottom-8 rounded-xl bg-white px-4 py-2 text-sm text-ink shadow-lg">
            <span className="font-semibold text-brand">BSSE</span> · 6th Semester
          </div>
        </div>
      </div>
    </section>
  );
}
