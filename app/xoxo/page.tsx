import PlayersTable from "../ui/xoxo/playersTable"
import Game from "../ui/xoxo/game";

export default function Page() {
    return (
        <div className="flex h-screen">
            <div className="flex-none w-14 p-4">
                <PlayersTable />
            </div>
            <div className="flex flex-col items-center flex-grow p-4">
                <div className="flex justify-center mt-10">
                    <Game />
                </div>
            </div>
        </div>
    )
}