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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted to-background py-20 px-5">
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
            <span className="text-foreground">Nexo</span>
            <span className="text-primary">Core</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            La plataforma líder para comprar y vender servicios profesionales con criptomonedas
          </p>

          {/* Wallet Connection */}
          <div className="bg-card rounded-2xl p-6 max-w-md mx-auto mb-12 animate-fade-in border border-border">
            {isInitialized && address ? (
              <div className="text-center">
                <p className="text-primary mb-2">✓ Conectado</p>
                <Address address={address as `0x${string}`} />
                <p className="text-muted-foreground text-sm mt-2">
                  Red: {currentNetwork.displayName}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Conecta tu wallet para comenzar:
                </p>
                <Link href="/wallet">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                    Conectar Wallet
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-5 bg-gradient-to-br from-card/50 to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para impulsar tu negocio en la era digital
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl hover:bg-accent transition-all duration-300 hover:transform hover:scale-105 group border border-border hover:border-primary/50"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={`/${service.image}`}
                    alt={service.title}
                    width={150}
                    height={150}
                    className="rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <service.icon className="h-10 w-10 text-primary mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vision de la Empresa */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Nuestra Visión</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                  <GlobeAltIcon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Objetivo Principal</h3>
                  <p className="text-muted-foreground">
                    Democratizar el acceso a servicios profesionales mediante criptomonedas,
                    eliminando barreras geográficas y financieras, permitiendo un servicio eficiente y seguro.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300">
                  <BuildingStorefrontIcon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Misión</h3>
                  <p className="text-muted-foreground">
                    Conectar talento global con oportunidades, facilitando transacciones seguras
                    y transparentes a través de blockchain, una plataforma de servicios eficiente.
                  </p>
                </div>
              </div>
            </div>

            {/* Crypto Section */}
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-card to-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <Image
                    src="/cripto.jpg"
                    alt="Crypto"
                    width={100}
                    height={100}
                    className="mr-4 rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">Tecnología Blockchain</h2>
                    <p className="text-primary font-semibold">
                      Pagos Seguros y Transparentes
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h4 className="font-semibold text-foreground">Pagos Instantáneos</h4>
                      <p className="text-muted-foreground text-sm">
                        Transacciones globales sin intermediarios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h4 className="font-semibold text-foreground">Seguridad Garantizada</h4>
                      <p className="text-muted-foreground text-sm">
                        Smart contracts auditables y transparentes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ChartBarIcon className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h4 className="font-semibold text-foreground">Tarifas Reducidas</h4>
                      <p className="text-muted-foreground text-sm">
                        Menores costos que métodos tradicionales
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Aceptamos:</strong> Bitcoin, Ethereum, USDT, USDC y otras criptomonedas principales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-5 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Únete a la Revolución Crypto con NexoCore
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Compra y vende servicios profesionales con la seguridad y transparencia de la blockchain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/PlataformaServicios">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                Explorar Servicios
              </Button>
            </Link>
            <Link href="/publish">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
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