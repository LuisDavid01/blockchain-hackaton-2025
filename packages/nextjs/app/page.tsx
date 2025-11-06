"use client";

import Link from "next/link";
import type { NextPage } from "next";
import {
  CodeBracketIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  EyeIcon,
  PlusCircleIcon,
  ServerIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  BuildingStorefrontIcon
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useWdk } from "~~/contexts/WdkContext";
import { Button } from "~~/components/ui/button";
import Image from "next/image";
import DashboardCard from "~~/components/card";

const Home: NextPage = () => {
  const { address, currentNetwork, isInitialized } = useWdk();

  const services = [
    {
      icon: CodeBracketIcon,
      title: "Desarrollo Web:",
      description: "Creación de sitios web modernos, responsive y optimizados para SEO. Tecnologías React, Next.js, Tailwind CSS.",
      image: "programacion.jpg",
      features: ["Landing Pages", "E-commerce", "Web Apps", "Optimización SEO"]
    },
    {
      icon: ShieldCheckIcon,
      title: "Ciberseguridad:",
      description: "Protección integral de tus sistemas, auditorías de seguridad y planes de contingencia contra amenazas digitales.",
      image: "tecnologia.jpg",
      features: ["Auditorías", "Pentesting", "Firewalls", "Monitoreo 24/7"]
    },
    {
      icon: ChartBarIcon,
      title: "Publicidad Digital:",
      description: "Campañas efectivas en redes sociales, Google Ads y estrategias de marketing digital para maximizar tu ROI.",
      image: "negocios.jpg",
      features: ["Social Media", "Google Ads", "Analytics", "Branding"]
    },
    {
      icon: ServerIcon,
      title: "Mantenimiento de Bases de Datos:",
      description: "Optimización, backup y administración de bases de datos SQL y NoSQL para máximo rendimiento.",
      image: "corporacion.jpg",
      features: ["MySQL/PostgreSQL", "MongoDB", "Backups", "Optimización"]
    },
    {
      icon: CubeIcon,
      title: "Mejora de Arquitectura Web:",
      description: "Refactorización y optimización de arquitecturas existentes para mejor escalabilidad y performance.",
      image: "servicioweb.jpg",
      features: ["Microservicios", "Cloud Migration", "Load Balancing", "CDN"]
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Desarrollo de Aplicaciones:",
      description: "Apps móviles nativas y cross-platform para iOS y Android, desde concept hasta deployment.",
      image: "tecnologia.jpg",
      features: ["React Native", "Flutter", "iOS/Android", "App Store"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/nexoo.png"
              alt="Nexo Core"
              width={250}
              height={250}
              className="animate-pulse"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Nexo</span>
            <span className="text-red-600">Core</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            La plataforma líder para comprar y vender servicios profesionales con criptomonedas
          </p>

          {/* Wallet Connection */}
          <div className="bg-gray-900 rounded-2xl p-6 max-w-md mx-auto mb-12 animate-fade-in">
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
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para impulsar tu negocio en la era digital
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <service.icon className="h-10 w-10 text-red-600 mr-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Crypto Section */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision de la Empresa */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Visión</h2>
              <div className="space-y-4">
                <div className="bg-gray-800 p-6 rounded-xl">
                  <GlobeAltIcon className="h-8 w-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Objetivo Principal</h3>
                  <p className="text-gray-300">
                    Democratizar el acceso a servicios profesionales mediante criptomonedas,
                    eliminando barreras geográficas y financieras, permitiento un servicio eficiente y seguro.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl">
                  <BuildingStorefrontIcon className="h-8 w-8 text-red-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Misión</h3>
                  <p className="text-gray-300">
                    Conectar talento global con oportunidades, facilitando transacciones seguras
                    y transparentes a través de blockchain, una plataforma de servicios eficiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Crypto Section */}
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-6">
                  <Image
                    src="/cripto.jpg"
                    alt="Crypto"
                    width={100}
                    height={100}
                    className="mr-4"
                  />
                  <div>
                    <h2 className="text-3xl font-bold">Tecnología Blockchain</h2>
                    <p className="text-red-600 font-semibold">Pagos Seguros y Transparentes</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <h4 className="font-semibold">Pagos Instantáneos</h4>
                      <p className="text-gray-400 text-sm">Transacciones globales sin intermediarios</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-semibold">Seguridad Garantizada</h4>
                      <p className="text-gray-400 text-sm">Smart contracts auditables y transparentes</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ChartBarIcon className="h-6 w-6 text-purple-500 mr-3" />
                    <div>
                      <h4 className="font-semibold">Tarifas Reducidas</h4>
                      <p className="text-gray-400 text-sm">Menores costos que métodos tradicionales</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Aceptamos:</strong> Bitcoin, Ethereum, USDT, USDC y otras criptomonedas principales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-5 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explora NexoCore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services" className="group">
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full transform hover:scale-105">
                <CodeBracketIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Explorar Servicios</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Descubre servicios profesionales categorizados dentro NexoCore
                </p>
              </div>
            </Link>

            <Link href="/purchases" className="group">
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full transform hover:scale-105">
                <EyeIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Mis Compras</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Seguimiento de proyectos en tiempo real de tus compras y actualizaciones del mismo
                </p>
              </div>
            </Link>

            <Link href="/publish" className="group">
              <div className="bg-gray-800 p-6 rounded-xl hover:bg-red-600 transition-all duration-300 h-full transform hover:scale-105">
                <PlusCircleIcon className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Publicar Servicio</h3>
                <p className="text-gray-400 group-hover:text-gray-200 text-sm">
                  Ofrece tus servicios, estadisticas en tiempo real y analizar el mercado
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Únete a la Revolución Crypto con NexoCore
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Compra y vende servicios profesionales con la seguridad y transparencia de la blockchain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
                Explorar Servicios
              </Button>
            </Link>
            <Link href="/publish">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
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