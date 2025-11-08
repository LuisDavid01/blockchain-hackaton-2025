"use client";

import Link from "next/link";
import type { NextPage } from "next";
import {
    CodeBracketIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    ServerIcon,
    CubeIcon,
    DevicePhoneMobileIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    ShoppingCartIcon
} from "@heroicons/react/24/outline";
import { Button } from "~~/components/ui/button";
import Image from "next/image";

const ServicesPage: NextPage = () => {
    const services = [
        {
            icon: CodeBracketIcon,
            title: "Desarrollo Web",
            description: "Creamos experiencias digitales excepcionales con las últimas tecnologías web.",
            fullDescription: "Desarrollamos sitios web y aplicaciones modernas, responsive y optimizadas para SEO. Utilizamos React, Next.js, TypeScript y Tailwind CSS para crear soluciones escalables y de alto rendimiento.",
            image: "estructura.jpg",
            features: [
                "Landing Pages de alto impacto",
                "E-commerce personalizado",
                "Web Apps progresivas",
                "Optimización SEO avanzada",
                "Integración con APIs",
                "Performance optimization"
            ],
            benefits: ["Tiempo de carga < 2s", "100% Responsive", "SEO optimizado", "Código mantenible"],
            price: "Desde $500"
        },
        {
            icon: ShieldCheckIcon,
            title: "Ciberseguridad",
            description: "Protección integral para tus sistemas y datos sensibles.",
            fullDescription: "Ofrecemos soluciones completas de ciberseguridad incluyendo auditorías, pentesting, monitoreo 24/7 y planes de contingencia para proteger tu infraestructura digital.",
            image: "seguridad.jpg",
            features: [
                "Auditorías de seguridad",
                "Pentesting avanzado",
                "Firewalls y WAF",
                "Monitoreo 24/7",
                "Planes de contingencia",
                "Cumplimiento normativo"
            ],
            benefits: ["Protección 360°", "Detección temprana", "Respuesta inmediata", "Cumplimiento legal"],
            price: "Desde $300"
        },
        {
            icon: ChartBarIcon,
            title: "Publicidad Digital",
            description: "Campañas que maximizan tu ROI y visibilidad online.",
            fullDescription: "Estrategias de marketing digital efectivas en redes sociales, Google Ads y plataformas digitales. Analizamos datos en tiempo real para optimizar tus campañas.",
            image: "market.jpg",
            features: [
                "Campañas en Redes Sociales",
                "Google Ads & SEO",
                "Analytics avanzado",
                "Branding digital",
                "Email Marketing",
                "Performance Marketing"
            ],
            benefits: ["ROI medible", "Audiencia segmentada", "Crecimiento orgánico", "Métricas en tiempo real"],
            price: "Desde $200"
        },
        {
            icon: ServerIcon,
            title: "Mantenimiento de Bases de Datos",
            description: "Optimización y administración profesional de tus datos.",
            fullDescription: "Servicios especializados en administración, optimización y mantenimiento de bases de datos SQL y NoSQL para garantizar máximo rendimiento y seguridad.",
            image: "datos.jpg",
            features: [
                "MySQL & PostgreSQL",
                "MongoDB & NoSQL",
                "Backups automáticos",
                "Optimización de queries",
                "Replicación y clustering",
                "Migración de datos"
            ],
            benefits: ["99.9% Uptime", "Backups seguros", "Performance máximo", "Escalabilidad"],
            price: "Desde $150/mes"
        },
        {
            icon: CubeIcon,
            title: "Mejora de Arquitectura Web",
            description: "Modernización y escalabilidad para tu infraestructura.",
            fullDescription: "Refactorización y optimización de arquitecturas existentes para mejorar escalabilidad, performance y mantenibilidad usando microservicios y cloud.",
            image: "nube.jpg",
            features: [
                "Arquitectura de Microservicios",
                "Migración a Cloud",
                "Load Balancing",
                "CDN Implementation",
                "Containerización",
                "Auto-scaling"
            ],
            benefits: ["Escalabilidad infinita", "Costos optimizados", "Alta disponibilidad", "Deploy continuo"],
            price: "Desde $800"
        },
        {
            icon: DevicePhoneMobileIcon,
            title: "Desarrollo de Aplicaciones",
            description: "Apps nativas y cross-platform para iOS y Android.",
            fullDescription: "Desarrollo de aplicaciones móviles nativas y cross-platform desde el concepto hasta el deployment en App Store y Google Play Store.",
            image: "estructura.jpg",
            features: [
                "React Native & Flutter",
                "iOS & Android Nativo",
                "UI/UX Design",
                "API Integration",
                "App Store Deployment",
                "Push Notifications"
            ],
            benefits: ["Performance nativo", "Código reutilizable", "Updates rápidos", "Store compliance"],
            price: "Desde $1000"
        }
    ];

    const handlePurchase = (serviceTitle: string) => {
        console.log(`Iniciando compra de: ${serviceTitle}`);
        alert(`Función de compra para ${serviceTitle} - Por implementar`);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 px-5 bg-gradient-to-br from-background via-muted/20 to-background">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        <span className="text-foreground">Nuestros</span>
                        <span className="text-primary"> Servicios</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
                        Soluciones tecnológicas profesionales diseñadas para impulsar tu negocio en la era digital
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={`/${service.image}`}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <service.icon className="h-8 w-8 text-primary bg-background/90 p-1.5 rounded-lg" />
                                    </div>
                                    {/* Price Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                                            {service.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2 mb-4">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-sm">
                                                <CheckCircleIcon className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                                <span className="text-foreground/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Benefits Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.benefits.map((benefit, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <Button
                                            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                                            onClick={() => handlePurchase(service.title)}
                                        >
                                            <ShoppingCartIcon className="h-4 w-4 mr-2" />
                                            <span>Comprar</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <ArrowRightIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-5 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                        Nuestro <span className="text-primary">Proceso</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Consulta",
                                description: "Analizamos tus necesidades y objetivos específicos"
                            },
                            {
                                step: "02",
                                title: "Propuesta",
                                description: "Diseñamos una solución personalizada para tu proyecto"
                            },
                            {
                                step: "03",
                                title: "Desarrollo",
                                description: "Implementamos con metodologías ágiles y mejores prácticas"
                            },
                            {
                                step: "04",
                                title: "Entrega",
                                description: "Garantizamos calidad y soporte continuo post-implementación"
                            }
                        ].map((process, index) => (
                            <div
                                key={index}
                                className="text-center group animate-fade-in-up"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {process.step}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {process.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-5 bg-gradient-to-br from-background via-card/50 to-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        ¿Listo para Transformar tu Negocio?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Contáctanos hoy mismo y descubre cómo nuestros servicios pueden impulsar tu crecimiento digital
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                            Solicitar Cotización
                        </Button>
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                            >
                                Volver al Inicio
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;