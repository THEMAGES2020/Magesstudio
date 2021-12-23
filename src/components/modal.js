import React from "react";
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import Modal from '@material-ui/core/Modal';



function Modals() {
    const [open, setOpen] = React.useState(false);
     const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

<Modal
className="bg-red w-64 h-64"
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {<>div</>}
      </Modal>

<div className="bg-white rounded-full shadow-2xl p-1" onClick={handleOpen}>
      <svg viewBox='0 0 32 32' fill='#0084ff' className="h-12 w-12 shadow-2xl">
        <path d='M27.276 4.92C30.322 7.473 32 10.877 32 14.506c0 3.628-1.678 7.032-4.724 9.585-3.017 2.528-7.021 3.92-11.276 3.92-.358 0-.72-.01-1.08-.03C10.251 30.606 6.434 31 4.566 31c-.656 0-1.024-.05-1.04-.052a.44.44 0 0 1-.357-.325.476.476 0 0 1 .135-.48c2.535-2.272 3.007-4.179 3.095-4.83-1.899-1.204-3.478-2.768-4.578-4.539C.63 18.856 0 16.688 0 14.506c0-3.629 1.678-7.033 4.724-9.586C7.74 2.392 11.744 1 16 1c4.255 0 8.26 1.392 11.276 3.92zM9 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'></path>
      </svg>
      </div>
     

    </div>
  );
}

export default Modals;

