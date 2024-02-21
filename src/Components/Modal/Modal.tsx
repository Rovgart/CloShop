import React from "react";
import { createPortal } from "react-dom";
import "./_modal.scss";
interface BackdropProps {
  children?: React.ReactNode;
}
type ModalProps = {
  children?: React.ReactNode;
};

class Backdrop extends React.Component<BackdropProps> {
  render(): React.ReactNode {
    return <div className="backdrop">{this.props.children}</div>;
  }
}

interface OverlayProps {
  children?: React.ReactNode; // Make children optional
}

class Overlay extends React.Component<OverlayProps> {
  render(): React.ReactNode {
    return (
      <div className="modal">
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const overlayRoot = document.getElementById("overlay");
class Modal extends React.Component<ModalProps> {
  modalRoot: HTMLElement | null = overlayRoot;

  render(): React.ReactNode {
    return (
      <>
        {this.modalRoot && createPortal(<Backdrop></Backdrop>, this.modalRoot)}
        {this.modalRoot &&
          createPortal(
            <Overlay>{this.props.children}</Overlay>,
            this.modalRoot
          )}
      </>
    );
  }
}

export default Modal;
