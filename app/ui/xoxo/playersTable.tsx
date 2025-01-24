import { roboto } from '@/app/ui/font'
import Image from "next/image";

const onePlayer = "Placeholder";
const twoPlayer = "Placeholder";

export default function PlayersTable() {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 w-[30rem]'>
      <h2 className={`${roboto.className} font-bold mb-4`}>Игроки</h2>
      <div className='flex items-center mb-4'>
        <Image
          src={'/zero.png'}
          alt='circle'
          width={24}
          height={24}
          className='mr-3'
        />
        <div>
          <p className={`${roboto.className}`}>{onePlayer}</p>
          <p className={`${roboto.className} text-sm text-gray-600`}>placeholder%</p>
        </div>
      </div>
      <div className='flex items-center'>
        <Image
          src={'/cross.png'}
          alt='cross'
          width={24}
          height={24}
          className='mr-3'
        />
        <div>
          <p className={`${roboto.className}`}>{twoPlayer}</p>
          <p className={`${roboto.className} text-sm text-gray-600`}>placeholder%</p>
        </div>
      </div>
    </div>
  )
}