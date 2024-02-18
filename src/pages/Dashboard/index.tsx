import Statistics from "./Statistics";
import VehiclesList from "./AllVehicles";

function Dashboard(){
    return (
        <>
            <h1 className=" text-3xl font-semibold text-gray-600">Dashboard</h1>
            <Statistics />
            <VehiclesList />
        </>
    );
}

export default Dashboard;