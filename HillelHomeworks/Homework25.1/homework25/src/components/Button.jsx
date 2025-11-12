export default function Button({showResults}) {
    return (
        <>
        <button onClick={showResults} className="emoji__btn">
            Show results
        </button>
        </>
    )
}