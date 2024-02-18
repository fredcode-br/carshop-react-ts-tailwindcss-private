import StatisticCard from "./StatisticCard";

function Statistics(){
    return (
        <section className="flex justify-between bg-white w-full mt-8 p-5 rounded-md">
                <StatisticCard 
                    image="car.svg"
                    text="Total de veículos:"
                    value="342"
                    customClass="border-e border-gray-2"
                />
                <StatisticCard 
                    image="carsavailable.svg"
                    text="Veículos disponíveis:"
                    value="189"
                    customClass="border-e border-gray-2"
                />
                <StatisticCard 
                    image="graphic.svg"
                    text="Vendas:"
                    value="153"
                />

            </section>
    )
}

export default Statistics;