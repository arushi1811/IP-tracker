import Link from "next/link"
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Whoops!</h1>
            <p>Something went wrong...</p>
            <p>Go back to <Link href="/"><a>Home</a></Link>?</p>
        </div>
    )
}

export default NotFound
