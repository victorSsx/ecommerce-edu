function Footer () {
    return(
        <>
        <footer className="bg-gray-900 text-white mt-12 p-6 text-center">
            <p className="text-sm"> 
                © {new Date().getFullYear()} EduStore. Todos os direitos reservados.
            </p>
            <p className="text-xs mt-1">Projeto educativo para portfólio</p>
        </footer>
        </>
    )
}

export default Footer;