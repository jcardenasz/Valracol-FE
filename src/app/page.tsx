import Image from "next/image";
import SocialNetworks from "@/app/components/molecules/socialNetworks";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-white text-black">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-8">Bienvenidos a Nuestra Página</h1>
        <div>
          <SocialNetworks />
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-lg">
            Nuestra misión es proporcionar soluciones innovadoras y de alta calidad que satisfagan las necesidades de nuestros clientes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-lg">
            Nuestra visión es ser líderes en el mercado, reconocidos por nuestra excelencia y compromiso con la satisfacción del cliente.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quiénes Somos</h2>
          <p className="text-lg">
            Somos un equipo de profesionales dedicados a ofrecer productos y servicios de alta calidad, comprometidos con la innovación y la mejora continua.
          </p>
        </section>
      </main>
    </div>
  );
}