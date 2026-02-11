import Image from "next/image";

const Navbar = () => {
    return (
        <nav className={'bento-box'}>
            <Image src="/runway-logo.png" alt="runway-logo" width={125} height={104}/>
        </nav>
    )
}

export default Navbar;