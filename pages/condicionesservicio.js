import Head from "next/head";
import Link from "next/link";

export default function CondicionesServicio() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | SMART INNOVATION SYSTEMS</title>

        <meta
          name="description"
          content="Términos y condiciones de uso de los servicios de SMART INNOVATION SYSTEMS, incluyendo el uso de WhatsApp Cloud API conforme a las políticas de Meta."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.smartinnovationsystems.com/condicionesservicio"
        />
      </Head>

      <div className="page legal-page">
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
              <Link href="/">Inicio</Link>
            </nav>
          </div>
        </header>

        {/* CONTENT */}
        <main className="legal-content">
          <h1>Términos y Condiciones de Uso</h1>

          <p>
            Bienvenido a <strong>SMART INNOVATION SYSTEMS</strong>. Al acceder o
            utilizar nuestros servicios, incluyendo aquellos ofrecidos a través
            de <strong>WhatsApp</strong> y <strong>WhatsApp Cloud API</strong>,
            usted acepta cumplir con los presentes Términos y Condiciones.
          </p>

          <h2>1. Identidad del proveedor</h2>
          <p>
            SMART INNOVATION SYSTEMS es una empresa dedicada al desarrollo de
            software empresarial, automatización de procesos, CRM, control
            financiero e integraciones tecnológicas.
          </p>

          <h2>2. Uso de los servicios</h2>
          <p>
            El usuario se compromete a utilizar los servicios de manera lícita,
            ética y conforme a las leyes aplicables. Está prohibido el uso de los
            servicios para:
          </p>

          <ul>
            <li>Actividades ilegales o fraudulentas</li>
            <li>Envío de spam o comunicaciones no autorizadas</li>
            <li>Violación de derechos de terceros</li>
            <li>Uso indebido de canales de mensajería como WhatsApp</li>
          </ul>

          <h2>3. Uso de WhatsApp y Meta</h2>
          <p>
            Algunos de nuestros servicios utilizan la{" "}
            <strong>WhatsApp Cloud API</strong>, operada por{" "}
            <strong>Meta Platforms, Inc.</strong>. El uso de estos servicios
            implica la aceptación adicional de las políticas de WhatsApp y Meta.
          </p>

          <p>
            SMART INNOVATION SYSTEMS no controla las plataformas de Meta y no es
            responsable por cambios, interrupciones o políticas aplicadas por
            dichas plataformas.
          </p>

          <h2>4. Datos personales</h2>
          <p>
            El tratamiento de los datos personales se rige por nuestra{" "}
            <Link href="/privacidad">Política de Privacidad</Link>. El usuario
            puede solicitar la eliminación de sus datos conforme a lo descrito
            en la página de{" "}
            <Link href="/eliminardatos">Eliminación de Datos</Link>.
          </p>

          <h2>5. Limitación de responsabilidad</h2>
          <p>
            SMART INNOVATION SYSTEMS no será responsable por daños directos o
            indirectos derivados del uso o imposibilidad de uso de los
            servicios, incluyendo fallos de plataformas de terceros como
            WhatsApp o Meta.
          </p>

          <h2>6. Disponibilidad del servicio</h2>
          <p>
            No garantizamos la disponibilidad continua e ininterrumpida de los
            servicios. Pueden realizarse mantenimientos, actualizaciones o
            ajustes sin previo aviso.
          </p>

          <h2>7. Propiedad intelectual</h2>
          <p>
            Todo el contenido, software, diseño, logotipos y materiales
            desarrollados por SMART INNOVATION SYSTEMS son propiedad de la
            empresa y están protegidos por las leyes de propiedad intelectual.
          </p>

          <h2>8. Modificaciones</h2>
          <p>
            SMART INNOVATION SYSTEMS se reserva el derecho de modificar estos
            Términos y Condiciones en cualquier momento. Las modificaciones
            entrarán en vigor a partir de su publicación en esta página.
          </p>

          <h2>9. Legislación aplicable</h2>
          <p>
            Estos Términos y Condiciones se rigen por las leyes aplicables en los
            Estados Unidos Mexicanos, sin perjuicio de normativas
            internacionales que puedan resultar aplicables.
          </p>

          <div className="legal-back">
            <Link href="/">← Volver al sitio</Link>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <strong>SMART INNOVATION SYSTEMS</strong>
          <span>Automatización · Visibilidad · Crecimiento</span>
          <small>© {new Date().getFullYear()} Todos los derechos reservados</small>
        </footer>
      </div>
    </>
  );
}
