"use client";

import Image from 'next/image';
import { roboto } from '@/app/ui/font';

interface ModalProps {
    message: string;
    onNewGame: () => void;
    onExit: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onNewGame, onExit }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-md w-[400px] h-[429px] flex flex-col items-center p-6">
            <Image
              src="/trophy.png"
              alt="Трофей"
              width={132}
              height={165}
              className="mb-4"
            />
            <h2 className={`${ roboto.className }text-center mb-4 text-2xl font-bold`}>{message}</h2>
            <button
              onClick={onNewGame}
              className={`${ roboto.className } font-medium bg-[#60C2AA] text-white rounded-lg w-[352px] h-[48px] p-[12px] transition-colors duration-200 mb-2`}
            >
              Новая игра
            </button>
            <button
              onClick={onExit}
              className={`${ roboto.className } font-medium bg-[#F7F7F7] rounded-lg w-[352px] h-[48px] p-[12px] transition-colors duration-200`}
            >
              Выйти в меню
            </button>
          </div>
        </div>
      );
    };

export default Modal;