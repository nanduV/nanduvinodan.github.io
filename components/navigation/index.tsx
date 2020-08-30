import styles from './navigation.module.scss';
import Link from 'next/link';


/**
 * Project Detail Container
 * @param props 
 */
export const Navigation = (props) => {

    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href="/about">
                        <a>ABOUT</a>
                    </Link>
                </li>
                <li>
                    <Link href="/work-experience">
                        <a>WORK EXPERIENCE</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <a>SKILLS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/coding-profile">
                        <a>CODING PROFILE</a>
                    </Link>
                </li>
                <li>
                    <Link href="/education">
                        <a>EDUCATION</a>
                    </Link>
                </li>
                <li>
                    <Link href="/awards">
                        <a>AWARDS</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};
