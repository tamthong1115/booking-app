import classNames from 'classnames/bind';
import {  faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ element = false }) {
    return (
        <div className={cx('popper')}>
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    {element ? (
                        <div className={cx('search-place')}>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                            <input placeholder="Bạn muốn đến đâu" />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                    ) : (
                        <div className={cx('wrapper')}>
                            <select className="id"></select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Input;
