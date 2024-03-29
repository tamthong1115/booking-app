import classNames from 'classnames/bind';
import { faCalendar, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

//
import styles from './Input.module.scss';
import Menu from '../Popper/Menu/Menu';

const cx = classNames.bind(styles);

function Input({ element = false, calendar = false }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/places')
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res);
            })
            .catch();
    }, [searchValue]);

    // handle
    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx('popper')}>
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    {element ? (
                        <Menu data={searchResult}>
                            <div className={cx('search-place')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                                <input value={searchValue} onChange={handleChange} placeholder="Bạn muốn đến đâu" />
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </Menu>
                    ) : (
                        <div>
                            {calendar ? (
                                <div className={cx('wrapper')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
                                    <h4 className={cx('description')}>T7, 11 tháng 5</h4>
                                    <span > - </span>
                                    <h4 className={cx('description')}>CN, 12 tháng 5</h4>
                                </div>
                            ) : (
                                <div className={cx('wrapper')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <h4 className={cx('description')}>3 người lớn - 1 trẻ em - 2 phòng</h4>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Input;
