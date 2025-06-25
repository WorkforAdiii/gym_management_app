import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const Modal = ({handleClose,content,header}) => {
  return (
  <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
  <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl px-8 py-10 shadow-2xl text-white relative">
        <div className="flex justify-between items-center border-b border-white/20 pb-6">
            <div className='text-2xl font-semibold mr-10'>{header}</div>
            <div onClick={()=>handleClose() }><CloseIcon sx={{fontSize:"32px"}} /> </div>
        </div>
        <div className='mt-10 font-semibold'>
           {content}
        </div>
        
        </div>
    </div>
  );
};

export default Modal;
