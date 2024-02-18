import Statistics from "./Statistics";

function Dashboard(){
    return (
        <>
            <h1 className=" text-3xl font-semibold text-gray-600">Dashboard</h1>
            <Statistics />
            <section className="flex justify-between bg-white w-full mt-8 p-5 rounded-md">
                <div className="w-full">
                    <h3>Todos os veículos</h3>
                    <div>
                        <input type="search" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;