"use client";

import Image from 'next/image';
import { roboto } from '@/app/ui/font';

interface StatusTableProps {
    currentPlayer: 'X' | 'O' | null;
    winner: 'X' | 'O' | null;
    playerNameX: string;
    playerNameO: string;
}

const StatusTable: React.FC<StatusTableProps> = ({ currentPlayer, winner, playerNameX, playerNameO}) => {
    const playerImage = (player: 'X' | 'O') => {
        return player === 'X' ? '/cross.png' : '/zero.png';
    };

    return (
        <div className='w-[400px] h-[48px] rounded-[12px] p-[12px] bg-[#373745] shadow-[0px_4px_20px_0px_#2C397917] flex items-center justify-center text-white mt-10'>
            {winner ? (
                <div>
                    <span className={`${roboto.className}`}>Выиграл </span>
                    <Image src={playerImage(winner)} alt={winner} width={24} height={24} className='inline' />
                    <span className={`${roboto.className}`}> {winner === 'X' ? playerNameX : playerNameO}</span>
                </div>
            ) : (
                <div>
                    <span className={`${roboto.className}`}>Ходит </span>
                    <Image src={playerImage(currentPlayer!)} alt={currentPlayer} width={24} height={24} className='inline' />
                    <span className={`${roboto.className}`}> {currentPlayer === 'X' ? playerNameX : playerNameO}</span>
                </div>
            )}
        </div>
    );
};

export default StatusTable;