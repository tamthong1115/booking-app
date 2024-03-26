import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <div>
            <div className={cx('container')}>
                <Header />
            </div>
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
