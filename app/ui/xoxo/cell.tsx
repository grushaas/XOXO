"use client";

import Image from 'next/image';

interface CellProps {
  value: 'X' | 'O' | null;
  onClick: () => void;
  winning?: boolean;
}

const Cell: React.FC<CellProps> = ({ value, onClick, winning }) => {
  return (
    <button
      className={`w-[218px] h-[218px] rounded-lg flex items-center justify-center transition-colors duration-200 shadow-lg ${
        winning ? (value === 'X' ? 'bg-[#CFEDE6]' : 'bg-[#F3BBD0]') : 'bg-white hover:bg-[#F7F7F7]'
      }`}
      onClick={onClick}
    >
 {value === 'X' ? (
        <Image src="/cross.png" alt="X" width={150} height={150} />
      ) : value === 'O' ? (
        <Image src="/zero.png" alt="O" width={150} height={150} />
      ) : null}
    </button>
  );
};

export default Cell;