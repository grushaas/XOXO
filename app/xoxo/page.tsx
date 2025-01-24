import PlayersTable from "../ui/xoxo/playersTable"
import Timer from "@/app/ui/xoxo/timer";

export default function Page() {
    return (
        <div className="flex flex-row">
            <div>
                <PlayersTable />
            </div>
            <div className="ml-[21rem]">
                <Timer />
            </div>
        </div>
    )
}