interface Props {
    image: string;
    text: string;
    value: string;
    customClass?: string;
}

function StatisticCard( {image, text, value, customClass }: Props) {
    return (

        <article className={`flex justify-center w-full ${customClass}`}>
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-300">
                <img
                    src={`/src/assets/img/icon/${image}`}
                    className="w-10 h-10 text-neutral-800"
                    alt=""
                />
            </div>
            <div className="ml-6">
                <p className="text-gray-500 font-semibold text-sm">{text}</p>
                <h2 className="text-3xl font-bold text-neutral-800">{value}</h2>
            </div>
        </article>
    );
}

export default StatisticCard;