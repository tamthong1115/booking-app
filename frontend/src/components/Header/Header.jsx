import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faBed, faCar, faLocationDot, faPlane, faSuitcase, faTaxi } from '@fortawesome/free-solid-svg-icons';
//
import Button from '../Button/Button';
import styles from './Header.module.scss';
import Search from '../Search';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('header')}>
                    <div className={cx('logo')}>
                        <span>Booking.com</span>
                    </div>

                    <div className={cx('actions')}>
                        <Button outline>VND</Button>
                        <Button outline>
                            <img
                                className={cx('icon')}
                                src="https://t-cf.bstatic.com/design-assets/assets/v3.109.0/images-flags/Vn@3x.png"
                                alt="Việt Nam"
                            />
                        </Button>
                        <Button outline to="/">
                            <FontAwesomeIcon className={cx('question')} icon={faCircleQuestion} />
                        </Button>
                        <Button outline to="/">
                            Đăng chỗ nghỉ của Quý vị
                        </Button>
                        <Button primary to="/">
                            Đăng ký
                        </Button>
                        <Button primary to="/">
                            Đăng nhập
                        </Button>
                    </div>
                </header>
                <nav>
                    <Button className={cx('border')} leftIcon={<FontAwesomeIcon icon={faBed} />}>
                        Lưu trú
                    </Button>
                    <Button rounded to="/" leftIcon={<FontAwesomeIcon icon={faPlane} />}>
                        Chuyến bay
                    </Button>
                    <Button rounded to="/" leftIcon={<FontAwesomeIcon icon={faSuitcase} />}>
                        Chuyến bay + Khách sạn
                    </Button>
                    <Button rounded to="/" leftIcon={<FontAwesomeIcon icon={faCar} />}>
                        Thuê xe
                    </Button>
                    <Button rounded to="/" leftIcon={<FontAwesomeIcon icon={faLocationDot} />}>
                        Địa điểm tham quan
                    </Button>
                    <Button rounded to="/" leftIcon={<FontAwesomeIcon icon={faTaxi} />}>
                        Taxi sân bay
                    </Button>
                </nav>
            </div>

            <Search />
            
        </div>
    );
};

export default Header;
