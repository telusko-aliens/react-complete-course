import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function UserInfo() {
    const { user } = useContext(UserContext);
    return (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="mb-4 text-base font-semibold text-emerald-700">
                User Info
            </h2>

            <div className="space-y-3 rounded-lg border border-emerald-200 p-4">
                <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Name
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-800">
                        {user.userName}
                    </p>
                </div>

                <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Role
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-800">
                        {user.role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
