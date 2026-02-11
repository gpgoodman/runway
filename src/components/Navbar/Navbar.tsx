import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image src="/runway-logo.png" alt="runway-logo" width={125} height={104}/>
        </nav>
    )
}

export default Navbar;