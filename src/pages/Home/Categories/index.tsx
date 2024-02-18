import LinkButton from "../../../components/LinkButton";

function Categories() {
    return (
        <section id="categories" className="flex flex-col items-center py-8">
            <div className="container">
                <h3 className="pb-5 text-center text-xl font-bold uppercase">Procurar por categoria</h3>
                <ul className="w-full flex flex-wrap justify-center md:justify-between gap-2">

                    <LinkButton
                        text="Hatch"
                        to=""
                        customClass="md:w-1/6"
                    />

                    <LinkButton
                        text="Sedan"
                        to=""
                        customClass="md:w-1/6"
                    />

                    <LinkButton
                        text="Suv"
                        to=""
                        customClass="md:w-1/6"
                    />

                    <LinkButton
                        text="Pick Up"
                        to=""
                        customClass="md:w-1/6"
                    />

                    <LinkButton
                        text="Outros"
                        to=""
                        customClass="md:w-1/6"
                    />

                </ul>
            </div>
        </section>

    )
}

export default Categories;
