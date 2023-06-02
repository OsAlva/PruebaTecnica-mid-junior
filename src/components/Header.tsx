import {header, link, headerContainer, logo} from './Header.css';

export const Header = () => {

    return (
        <div className={headerContainer}>
            <nav className={header}>
                <img className={logo} src="../public/y.svg" alt="logo"/>
                <a className={link} href="/"> Hacker News</a>
                {/* <ul className={listUl}>
                    <li><a className={headerOption} href="#">new</a></li>
                    <li><a className={headerOption} href="#">past</a></li>
                    <li><a className={headerOption} href="#">comments</a></li>
                    <li><a className={headerOption} href="#">ask</a></li>
                    <li><a className={headerOption} href="#">show</a></li>
                    <li><a className={headerOption} href="#">jobs</a></li>
                    <li><a className={headerOption} href="#">submit</a></li>
                </ul> */}
            </nav>
        </div>
    )

}