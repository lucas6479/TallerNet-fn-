function Chatbot() {
  return (
    <>
      <button
        type="button"
        className="chatbot-fab btn btn-dark border border-secondary border-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow text-primary"
        data-bs-toggle="modal"
        data-bs-target="#chatbotModal"
        aria-label="Asistente TallerNet"
      >
        <i className="bi bi-robot fs-5"></i>
      </button>

      <div
        className="modal fade"
        id="chatbotModal"
        tabIndex="-1"
        aria-labelledby="chatbotModalLabel"
        aria-hidden="true"
        data-bs-theme="dark"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content rounded-4 border border-secondary border-opacity-25">
            <div className="modal-body text-center p-4">
              <div className="mb-3">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle border border-primary border-opacity-25 p-3 lh-1">
                  <i className="bi bi-robot fs-4 text-primary"></i>
                </span>
              </div>

              <h5 className="fw-semibold mb-2" id="chatbotModalLabel">Asistente TallerNet</h5>

              <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 mb-3">
                Próximamente
              </span>

              <p className="text-secondary small mb-4">
                El asistente virtual de TallerNet todavía está en desarrollo.
                Muy pronto vas a poder usarlo desde acá.
              </p>

              <button
                type="button"
                className="btn pub-demo-btn w-100"
                data-bs-dismiss="modal"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
