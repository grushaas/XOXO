'use client';

import { roboto } from '@/app/ui/font'
import Image from "next/image";
import { useSearchParams } from 'next/navigation';



export default function PlayersTable() {
  const searchParams = useSearchParams();
  const onePlayer = searchParams.get("playerX") || "Игрок X";
  const twoPlayer = searchParams.get("playerO") || "Игрок O";
  

  return (
    <div className='bg-white rounded-lg shadow-md p-6 w-[30rem]'>
      <h2 className={`${roboto.className} font-bold mb-4`}>Игроки</h2>
      <div className='flex items-center mb-4'>
        <Image
          src={'/cross.png'}
          alt='circle'
          width={24}
          height={24}
          className='mr-3'
        />
        <div>
          <p className={`${roboto.className}`}>{onePlayer}</p>
        </div>
      </div>
      <div className='flex items-center'>
        <Image
          src={'/zero.png'}
          alt='cross'
          width={24}
          height={24}
          className='mr-3'
        />
        <div>
          <p className={`${roboto.className}`}>{twoPlayer}</p>
        </div>
      </div>
    </div>
  )
}