import Head from "next/head";
import Link from "next/link";

export default function Privacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | SMART INNOVATION SYSTEMS</title>

        <meta
          name="description"
          content="Política de Privacidad de SMART INNOVATION SYSTEMS. Uso de datos, WhatsApp Cloud API y derechos del usuario."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.smartinnovationsystems.com/privacidad"
        />
      </Head>

      <div className="page legal-page">
        {/* HEADER SIMPLE */}
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
          <h1>Política de Privacidad</h1>

          <p>
            En <strong>SMART INNOVATION SYSTEMS</strong> (en adelante “la empresa”),
            respetamos la privacidad de nuestros usuarios y clientes. Esta Política
            de Privacidad describe cómo recopilamos, utilizamos, almacenamos y
            protegemos la información personal, en cumplimiento con las políticas
            de <strong>Meta Platforms, Inc.</strong> y la normativa aplicable.
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>SMART INNOVATION SYSTEMS</strong><br />
            Servicios de desarrollo de software, automatización y soluciones
            empresariales.
          </p>

          <h2>2. Información que recopilamos</h2>
          <p>
            Podemos recopilar información personal cuando el usuario se comunica
            con nosotros a través de:
          </p>
          <ul>
            <li>WhatsApp (incluyendo WhatsApp Cloud API)</li>
            <li>Correo electrónico</li>
            <li>Formularios o contacto directo</li>
          </ul>

          <p>Los datos pueden incluir:</p>
          <ul>
            <li>Nombre</li>
            <li>Número telefónico</li>
            <li>Correo electrónico</li>
            <li>Información relacionada con su empresa o solicitud</li>
          </ul>

          <h2>3. Uso de la información</h2>
          <p>La información recopilada se utiliza para:</p>
          <ul>
            <li>Responder mensajes y solicitudes.</li>
            <li>Brindar soporte, información y servicios.</li>
            <li>Operar y mejorar nuestros sistemas.</li>
            <li>Cumplir obligaciones legales y contractuales.</li>
          </ul>

          <h2>4. Uso de WhatsApp y Meta</h2>
          <p>
            Utilizamos <strong>WhatsApp Cloud API</strong>, un servicio proporcionado
            por <strong>Meta Platforms, Inc.</strong>, para comunicarnos con nuestros
            usuarios.
          </p>
          <p>
            Al interactuar con nosotros vía WhatsApp, el usuario acepta que su
            información (como número telefónico y mensajes) sea procesada conforme
            a:
          </p>
          <ul>
            <li>Esta Política de Privacidad</li>
            <li>Las políticas de WhatsApp y Meta</li>
          </ul>

          <h2>5. Almacenamiento y protección de datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas para proteger los datos
            personales contra accesos no autorizados, pérdida, alteración o uso
            indebido.
          </p>

          <h2>6. Compartición de información</h2>
          <p>
            No vendemos ni rentamos datos personales. La información solo puede
            compartirse cuando:
          </p>
          <ul>
            <li>Sea necesario para operar servicios tecnológicos.</li>
            <li>Sea requerido por ley o autoridad competente.</li>
          </ul>

          <h2>7. Eliminación de datos</h2>
          <p>
            El usuario puede solicitar la eliminación de sus datos personales en
            cualquier momento.
          </p>
          <p>
            Para hacerlo, puede contactarnos y atenderemos la solicitud conforme
            a las políticas de Meta y la legislación aplicable.
          </p>

          <h2>8. Derechos del usuario</h2>
          <p>El usuario tiene derecho a:</p>
          <ul>
            <li>Acceder a sus datos personales.</li>
            <li>Solicitar corrección o eliminación.</li>
            <li>Limitar u oponerse al tratamiento.</li>
          </ul>

          <h2>9. Cambios a esta política</h2>
          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad.
            Cualquier cambio será publicado en esta página.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para dudas relacionadas con esta Política de Privacidad o el manejo
            de datos personales, puede comunicarse con nosotros a través de
            nuestros canales oficiales.
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
