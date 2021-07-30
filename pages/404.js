import Link from "next/link"
import {useEffect} from 'react'
import router, { useRouter } from "next/router"


const NotFound = () => {

    useEffect(()=> {
        setTimeout(()=> {
            router.push("/")
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Whoops!</h1>
            <p>Something went wrong...</p>
            <p>Go back to <Link href="/"><a>Home</a></Link>?</p>
        </div>
    )
}

export default NotFound
