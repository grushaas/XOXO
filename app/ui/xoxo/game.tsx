"use client";

import { useState } from "react";
import Cell from "@/app/ui/xoxo/cell";
import { useSearchParams, useRouter } from "next/navigation";
import StatusTable from "@/app/ui/xoxo/statusTable";
import Modal from "@/app/ui/xoxo/modal";
import Timer from "@/app/ui/xoxo/timer";

const Game: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const playerX = searchParams.get("playerX") || "Игрок X";
  const playerO = searchParams.get("playerO") || "Игрок O";

  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [isTimerActive, setIsTimerActive] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.player);
      setWinningLine(result.line);
      setIsTimerActive(false);
      setModalMessage(
        result.player === "X" ? `${playerX} победил!` : `${playerO} победил!`
      );
      setIsModalOpen(true);
    } else if (newBoard.every((cell) => cell !== null)) {
      setModalMessage("Ничья");
      setIsTimerActive(false);
      setIsModalOpen(true);
    }
  };

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { player: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const handleNewGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningLine(null);
    setIsModalOpen(false);
    setIsTimerActive(true);
  };

  const handleExit = () => {
    router.push("/");
  };
  const handleTimeUp = () => {
    setModalMessage("Ничья");
    setIsModalOpen(true);
    setIsTimerActive(false);
  };

  return (
    <div className="flex flex-col items-center">
        <div className="mb-4">
            <Timer isActive={isTimerActive} onTimeUp={handleTimeUp} />
        </div>
        <div className="grid grid-cols-3 gap-1 bg-[#F6F6F6] rounded-lg shadow-[0px_4px_20px_0px_#2C397917]">
            {board.map((value, index) => {
            const isWinningCell = winningLine?.includes(index);
            return (
                <Cell
                key={index}
                value={value}
                onClick={() => handleClick(index)}
                winning={isWinningCell}
                />
            );
            })}
        </div>
        <StatusTable
            currentPlayer={winner ? null : isXNext ? "X" : "O"}
            winner={winner}
            playerNameX={playerX || "Игрок X"}
            playerNameO={playerO || "Игрок O"}
        />
        {isModalOpen && (
            <Modal
            message={modalMessage}
            onNewGame={handleNewGame}
            onExit={handleExit}
            />
        )}
        </div>
    );
};

export default Game;
