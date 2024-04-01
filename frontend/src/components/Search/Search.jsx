import classNames from 'classnames/bind';
//
import styles from './Search.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Calendar from '../Popper/Calendar/';
import Box from '../Popper/Box/Box';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <Input element={true} />
            <Calendar>
                <Input calendar />
            </Calendar>
            <Box>
                <Input />
            </Box>
            <Button search>Tìm kiếm</Button>
        </div>
    );
}

export default Search;
