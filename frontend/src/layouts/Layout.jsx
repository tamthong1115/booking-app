import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
<<<<<<< HEAD
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
=======
        <div>
            <div className={cx('container')}>
                <Header />
            </div>
            <div className="container mx-auto flex-1 py-10">{children}</div>
>>>>>>> a943c0c4c4644a8c6cb36578f4e27752c6e41372
            <Footer />
        </div>
    );
};

export default Layout;
