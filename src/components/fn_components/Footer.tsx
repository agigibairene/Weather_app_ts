export default function Footer(){
    const date : Date = new Date();
    const year = date.getFullYear();

    return(
        <footer className="border-t backdrop-blur py-12">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p>&copy; {year} Irene Akawin. All rights reserved</p>
            </div>
        </footer>
    )
}