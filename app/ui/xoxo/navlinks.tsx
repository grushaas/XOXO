"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { roboto } from "@/app/ui/font";

export default function NavLinks() {
  const pathname = usePathname();
  return(
    <>
      <Link href={"/xoxo"} className={clsx(
        'w-32 h-8 p-1 hover:bg-bg_hover_button hover:rounded-full',
        {
          'bg-bt_current text-white rounded-full p-1 hover:bg-bt_current hover:rounded-full': pathname === '/xoxo',
        }
      )}>
        <p className={`${roboto.className} font-medium text-base text-center`}>Игровое поле</p>
      </Link>
      <Link href={"/rating"} className={clsx(
        'w-20 h-8 p-1 hover:bg-bg_hover_button hover:rounded-full',
        {
          'bg-bt_current text-white rounded-full p-1 hover:bg-bt_current hover:rounded-full': pathname === '/rating',
        }
      )}>
        <p className={`${roboto.className} font-medium text-base text-center`}>Рейтинг</p>
      </Link>
      <Link href={"/active-players"} className={clsx(
        'w-40 h-8 p-1 hover:bg-bg_hover_button hover:rounded-full',
        {
          'bg-bt_current text-white rounded-full p-1 hover:bg-bt_current hover:rounded-full': pathname === '/active-players',
        }
      )}>
        <p className={`${roboto.className} font-medium text-base text-center`}>Активные игроки</p>
      </Link>
      <Link href={"/history"} className={clsx(
        'w-32 h-8 p-1 hover:bg-bg_hover_button hover:rounded-full',
        {
          'bg-bt_current text-white rounded-full p-1 hover:bg-bt_current hover:rounded-full': pathname === '/history',
        }
      )}>
        <p className={`${roboto.className} font-medium text-base text-center`}>История игр</p>
      </Link>
      <Link href={"/list-players"} className={clsx(
        'w-36 h-8 p-1 hover:bg-bg_hover_button hover:rounded-full',
        {
          'bg-bt_current text-white rounded-full p-1 hover:bg-bt_current hover:rounded-full': pathname === '/list-players',
        }
      )}>
        <p className={`${roboto.className} font-medium text-base text-center`}>Список игроков</p>
      </Link>
    </>
  )
}
