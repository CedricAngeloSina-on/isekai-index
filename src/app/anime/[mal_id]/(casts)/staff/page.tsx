import { getAnimeStaff } from "@/utils/getAnimeStaff";
import StaffCard from "@/components/staff-card";

export default async function Staff({
    params: { mal_id },
}: {
    params: { mal_id: number };
}) {
    const staffData = await getAnimeStaff(mal_id);

    return (
        <div className="flex h-auto w-full flex-col space-y-4 px-8 pb-8 text-left text-slate-400">
            <div className="flex text-base font-semibold capitalize leading-tight tracking-wider text-slate-400">
                Staff
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {staffData.map((staff, index) => (
                    <StaffCard key={index} {...staff} />
                ))}
            </div>
        </div>
    );
}
