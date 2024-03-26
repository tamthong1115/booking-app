import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
//
import Button from '../../Button/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ onClick }) {
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />}
            to="/"
            onClick={onClick}
        >
            <div className={cx('info')}>
                <h4 className={cx('title')}>TP. Hồ Chí Minh</h4>
                <p className={cx('description')}>Khu vực TP. Hồ Chí Minh, Việt Nam</p>
            </div>
        </Button>
    );
}

export default MenuItems;
