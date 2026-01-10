import Head from "next/head";
import Link from "next/link";

export default function EliminarDatos() {
  return (
    <>
      <Head>
        <title>Eliminación de Datos | SMART INNOVATION SYSTEMS</title>

        <meta
          name="description"
          content="Procedimiento para solicitar la eliminación de datos personales en SMART INNOVATION SYSTEMS conforme a políticas de Meta y WhatsApp Cloud API."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.smartinnovationsystems.com/eliminardatos"
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
          <h1>Eliminación de Datos Personales</h1>

          <p>
            En <strong>SMART INNOVATION SYSTEMS</strong> respetamos el derecho de
            nuestros usuarios a solicitar la eliminación de sus datos personales,
            conforme a la normativa vigente y a las políticas de{" "}
            <strong>Meta Platforms, Inc.</strong> y <strong>WhatsApp</strong>.
          </p>

          <h2>1. ¿Qué datos pueden eliminarse?</h2>
          <p>
            El usuario puede solicitar la eliminación de cualquier información
            personal proporcionada a través de:
          </p>
          <ul>
            <li>WhatsApp (incluyendo WhatsApp Cloud API)</li>
            <li>Correo electrónico</li>
            <li>Contacto directo con nuestro equipo</li>
          </ul>

          <p>Esto puede incluir:</p>
          <ul>
            <li>Nombre</li>
            <li>Número telefónico</li>
            <li>Correo electrónico</li>
            <li>Mensajes o historiales de comunicación</li>
          </ul>

          <h2>2. ¿Cómo solicitar la eliminación de datos?</h2>
          <p>
            Para solicitar la eliminación de sus datos personales, el usuario
            debe seguir uno de los siguientes métodos:
          </p>

          <ul>
            <li>
              Enviar un mensaje solicitando la eliminación de datos a través del
              mismo canal de WhatsApp donde se haya comunicado con nosotros.
            </li>
            <li>
              Contactarnos por nuestros medios oficiales indicando:
              <ul>
                <li>Nombre completo</li>
                <li>Número telefónico utilizado</li>
                <li>Solicitud explícita de eliminación de datos</li>
              </ul>
            </li>
          </ul>

          <h2>3. Tiempo de respuesta</h2>
          <p>
            Una vez recibida la solicitud, <strong>SMART INNOVATION SYSTEMS</strong>{" "}
            procesará la eliminación de los datos en un plazo razonable, conforme
            a los requisitos legales y a las políticas de Meta.
          </p>

          <h2>4. Confirmación</h2>
          <p>
            Una vez completado el proceso de eliminación, el usuario podrá
            recibir una confirmación por el mismo medio de contacto utilizado
            para realizar la solicitud.
          </p>

          <h2>5. Excepciones</h2>
          <p>
            Algunos datos pueden conservarse únicamente cuando sea necesario
            para cumplir con obligaciones legales, regulatorias o contractuales.
            Dichos datos no serán utilizados para otros fines.
          </p>

          <h2>6. Relación con WhatsApp y Meta</h2>
          <p>
            Al utilizar nuestros servicios a través de WhatsApp, el usuario
            reconoce que ciertos datos pueden ser procesados también por{" "}
            <strong>Meta Platforms, Inc.</strong>, conforme a sus propias
            políticas de privacidad.
          </p>

          <h2>7. Cambios en este procedimiento</h2>
          <p>
            Este procedimiento puede actualizarse en cualquier momento. Las
            modificaciones serán publicadas en esta misma página.
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
