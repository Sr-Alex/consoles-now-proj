import Searcher from "./Searcher";

function LinkProductSearcher() {
    const submitHandler = (element) => {
        element.preventDefault();
        console.log("Submitted!");
    }
    return <section className="w-full min-h-fit p-6">
        <h2 className="w-2/3 max-w-64 text-xl font-extrabold font-Jura">O que está procurando hoje?</h2>
        <Searcher onSubmit={submitHandler} />
    </section>
}

export default LinkProductSearcher;