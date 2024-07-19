/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

export default function Footer() {
  return (
        <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
            <div className="mb-2 mb-md-0"> ©, Hecho por ❤️  
                <a href="https://github.com/" target="_blank" className="footer-link fw-bolder">Phell tec</a>
            </div>
            <div>
                {/* <a href="mailto:mesadeayuda@alvarezbohl.pe?Subject=Interesado%20en%20el%20sistema" className="footer-link me-4" target="_blank">Correo</a>
                <a href="https://api.whatsapp.com/send?phone=51915215795&text=Hola,%20requiero%20ayuda%20sobre%20el%20sistema%20web" target="_blank" className="footer-link me-4">WhatsApp</a> */}
            </div>
        </div>
        </footer>
  )
}
