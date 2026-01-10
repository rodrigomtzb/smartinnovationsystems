"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart2, Layers, Menu, X } from "lucide-react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <>
      <Head>
        <title>SMART INNOVATION SYSTEMS | Software empresarial</title>
        <meta
          name="description"
          content="Software empresarial para PYMEs: CRM, inventario, finanzas y WhatsApp empresarial."
        />
        <link rel="canonical" href="https://www.smartinnovationsystems.com" />
      </Head>

      <ParallaxProvider>
        <div className="page">

          {/* HEADER */}
          <header className="header">
            <div className="header-inner">
              <div className="brand">
                <img src="/logo-fav.png" alt="SMART INNOVATION SYSTEMS Logo" />
                <div>
                  <strong>SMART INNOVATION SYSTEMS</strong><br />
                  <span>Business software & automation</span>
                </div>
              </div>

              <nav className="menu desktop">
                <a href="#about">Quiénes Somos</a>
                <a href="#products">Productos</a>
                <a href="#services">Servicios</a>
                <a href="#whatsapp">WhatsApp</a>
                <a href="#contact">Contacto</a>
                <Link href="/privacidad">Privacidad</Link>
              </nav>

              <button
                className="menu-toggle"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú"
              >
                <Menu size={28} />
              </button>
            </div>
          </header>

          {/* MOBILE MENU */}
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mobile-menu-header">
                <strong>Menú</strong>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <nav>
                <a onClick={() => setMenuOpen(false)} href="#about">Quiénes Somos</a>
                <a onClick={() => setMenuOpen(false)} href="#products">Productos</a>
                <a onClick={() => setMenuOpen(false)} href="#services">Servicios</a>
                <a onClick={() => setMenuOpen(false)} href="#whatsapp">WhatsApp</a>
                <a onClick={() => setMenuOpen(false)} href="#contact">Contacto</a>
                <Link onClick={() => setMenuOpen(false)} href="/privacidad">Privacidad</Link>
              </nav>
            </motion.div>
          )}

          {/* HERO */}
          <Parallax y={[-15, 15]}>
            <section className="hero">
              <div className="hero-inner">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="tagline">SMART · FAST · SCALABLE</p>

                  <h1>
                    Software que convierte
                    <span> el caos operativo en control total</span>
                  </h1>

                  <p className="hero-text">
                    Ayudamos a empresas que venden por WhatsApp y usan Excel
                    a centralizar <strong>ventas, clientes, inventario y finanzas.</strong>
                  </p>

                  <a href="#contact" className="cta-primary">
                    Solicitar diagnóstico gratuito
                  </a>
                </motion.div>

                <motion.div className="hero-card" variants={float} animate="animate">
                  <h3>CRM + Inventario + Finanzas</h3>
                  <p>
                    Un panel empresarial que muestra lo que pasa en tu negocio
                    en tiempo real.
                  </p>
                  <small>
                    Integraciones: Pagos · Identidad · WhatsApp · Notificaciones
                  </small>
                </motion.div>

              </div>
            </section>
          </Parallax>

          {/* QUIÉNES SOMOS */}
          <section className="section" id="about">
            <h2>Quiénes Somos</h2>
            <p>
              <strong>SMART INNOVATION SYSTEMS</strong> ayuda a PYMEs a crecer
              con orden, automatización y datos confiables.
            </p>
          </section>

          {/* PRODUCTOS */}
          <section className="section alt" id="products">
            <h2>Productos</h2>
            <div className="cards">
              <div className="card">
                <h3>CRM Empresarial</h3>
                <p>Gestión de clientes y ventas.</p>
              </div>
              <div className="card">
                <h3>Dashboard Financiero</h3>
                <p>Ingresos, gastos y utilidades.</p>
              </div>
              <div className="card">
                <h3>WhatsApp Empresarial</h3>
                <p>Automatización y métricas.</p>
              </div>
            </div>
          </section>

          {/* SERVICIOS */}
          <section className="section" id="services">
            <h2>Servicios</h2>
            <div className="cards">
              <div className="card">
                <Layers size={40} />
                <h3>Desarrollo a Medida</h3>
                <p>Software alineado a tu operación.</p>
              </div>
              <div className="card">
                <BarChart2 size={40} />
                <h3>Automatización</h3>
                <p>Elimina tareas manuales.</p>
              </div>
              <div className="card">
                <MessageSquare size={40} />
                <h3>WhatsApp Empresarial</h3>
                <p>Ventas y atención centralizada.</p>
              </div>
            </div>
          </section>

          {/* WHATSAPP */}
          <section className="section alt" id="whatsapp">
            <h2>WhatsApp Empresarial</h2>
            <div className="cards">
              <div className="card center">
                <MessageSquare size={40} />
                <h3>Habla con un asesor</h3>
                <p>Centraliza WhatsApp, clientes y ventas.</p>
                <a
                  className="cta-secondary"
                  href="https://wa.me/521XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <section className="section" id="contact">
            <h2>Contacto</h2>
            <p>Agenda una llamada y obtén un diagnóstico gratuito.</p>
            <a
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Agendar llamada
            </a>
          </section>

          <footer className="footer">
            <strong>SMART INNOVATION SYSTEMS</strong>
            <span>Automatización · Visibilidad · Crecimiento</span>
            <Link href="/privacidad" style={{color:"#FFF"}}>Política de Privacidad</Link><br />
            <Link href="/condicionesservicio" style={{color:"#FFF"}}>Condiciones De Servicio</Link><br />
            <Link href="/condicionesservicio" style={{color:"#FFF"}}>Eliminar Datos</Link><br />
            <small>© {new Date().getFullYear()}</small>
          </footer>

        </div>
      </ParallaxProvider>
    </>
  );
}
