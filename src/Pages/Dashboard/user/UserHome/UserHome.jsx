import useAuth from "../../../../Sheard/Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl">
                <span>Hi welcome </span>
                {
                    user?.displayName? user.displayName :"Go Back"
                }
            </h1>
        </div>
    );
};

export default UserHome;