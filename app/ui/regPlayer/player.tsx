"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { roboto } from "@/app/ui/font";
import Image from "next/image";

export default function PlayersPage() {
  const [playerNameX, setPlayerNameX] = useState();
  const [playerNameO, setPlayerNameO] = useState();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/xoxo?playerX=${encodeURIComponent(
        playerNameX
      )}&playerO=${encodeURIComponent(playerNameO)}`
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`bg-white rounded-lg shadow-md w-[400px] h-[464px] p-[40px] pt-[40px] px-[24px] pb-[40px] flex flex-col items-center`}
      >
        <Image
          src="/dog.png"
          alt="Dog"
          width={132}
          height={132}
          className="mb-4"
        />
        <h2 className={`${roboto.className} text-center text-2xl font-bold mb-4`}>
          Войдите в игру
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Имя игрока 1 (X)"
            value={playerNameX}
            onChange={(e) => setPlayerNameX(e.target.value)}
            className={`${roboto.className} border rounded-lg p-2 mb-4 w-full`}
            required
          />
          <input
            type="text"
            placeholder="Имя игрока 2 (O)"
            value={playerNameO}
            onChange={(e) => setPlayerNameO(e.target.value)}
            className={`${roboto.className} border rounded-lg p-2 mb-4 w-full`}
            required
          />
          <button
            type="submit"
            className={`rounded-lg p-[12px] w-[352px] h-[48px] transition-colors duration-200 ${
              playerNameX && playerNameO ? "bg-[#60C2AA] hover:bg-[#4DBFA1]" : "bg-[#60C2AA4D]"
            } ${roboto.className}`}
            disabled={!playerNameX || !playerNameO}
          >
            <span className={`${roboto.className} text-white`}>Начать игру</span>
          </button>
        </form>
      </div>
    </div>
  );
}
