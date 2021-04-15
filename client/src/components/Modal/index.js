
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="text-primary modal-main">
          {children}
          <button className="btn" type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
};


export default Modal;
