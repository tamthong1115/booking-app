import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
