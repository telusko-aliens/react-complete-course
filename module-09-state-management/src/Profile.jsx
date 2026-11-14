import UserInfo from "./UserInfo";

function Profile() {
    return (
        <>
            <div className="rounded-xl border border-orange-100 bg-orange-100 p-5">
                <h2 className="mb-4 text-base font-semibold text-orange-600">
                    Profile
                </h2>
                <UserInfo />
            </div>
        </>
    );
}

export default Profile;
