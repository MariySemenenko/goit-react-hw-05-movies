import { useGetMovieCredits } from "hooks/useGetMovieCredits"
import { Loader } from "components/Loader/Loader"


//запит інформації про акторський склад для сторінки кінофільму
export const Cast = () => {
const { credit, error, isLoading } = useGetMovieCredits()

    return (
        <>
        <ul>
            {credit.map(() => (
                <li>
                    <img/>
                    <p></p>
                    <p></p>
                </li>
            ))}
        </ul>
        {isLoading && <Loader />}
        {error && <div>Error</div>}
        </>
    )
}