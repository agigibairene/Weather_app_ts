import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface Props{
    children: ReactNode
}

export default function Layout({children}: Props){
    return(
        <div className="bg-gradient-to-br from-background bg-muted">
            <Header />
            <main className="min-h-screen container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}