"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { CodeBracketIcon, ShieldCheckIcon, ChartBarIcon, EyeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useWdk } from "~~/contexts/WdkContext";
import { Button } from "~~/components/ui/button";

const Home: NextPage = () => {
  const { address, currentNetwork, isInitialized } = useWdk();

  const services = [
    {
      icon: CodeBracketIcon,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos y responsive"
    },
    {
      icon: ShieldCheckIcon,
      title: "Ciberseguridad",
      description: "Protección y mantenimiento de tus sistemas"
    },
    {
      icon: ChartBarIcon,
      title: "Publicidad Digital",
      description: "Campañas efectivas en el mundo digital y redes sociales"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Next</span>
            <span className="text-red-600">Core</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            La plataforma líder para comprar y vender servicios profesionales con criptomonedas
          </p>
          
          {/* Wallet Connection */}
          <div className="bg-gray-900 rounded-2xl p-6 max-w-md mx-auto mb-12">
            {isInitialized && address ? (
              <div className="text-center">
                <p className="text-green-400 mb-2">✓ Conectado</p>
                <Address address={address as `0x${string}`} />
                <p className="text-gray-400 text-sm mt-2">Red: {currentNetwork.displayName}</p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-gray-400 mb-4">Conecta tu wallet para comenzar:</p>
                <Link href="/wallet">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">
                    Conectar Wallet
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-5 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors">
                <service.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services" className="group">
              <div className="bg-gray-900 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full">
                <CodeBracketIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Explorar Servicios</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Descubre nuestros servicios profesionales
                </p>
              </div>
            </Link>

            <Link href="/crypto" className="group">
              <div className="bg-gray-900 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full">
                <ChartBarIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Mercado Crypto</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Estadísticas en tiempo real
                </p>
              </div>
            </Link>

            <Link href="/purchases" className="group">
              <div className="bg-gray-900 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full">
                <EyeIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Mis Compras</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Seguimiento de proyectos
                </p>
              </div>
            </Link>

            <Link href="/publish" className="group">
              <div className="bg-gray-900 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full">
                <PlusCircleIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Publicar Servicio</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Ofrece tus servicios
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a la Revolución Crypto
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Compra y vende servicios profesionales con la seguridad y transparencia de la blockchain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">
                Explorar Servicios
              </Button>
            </Link>
            <Link href="/publish">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg">
                Publicar Servicio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;