import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
//
import styles from './Search.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Menu from '../Popper/Menu/Menu';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <Menu>
                <Input element={true} />
            </Menu>
            <div>
                <Tippy placement="bottom" visible interactive render={() => <div> word </div>}>
                    <div>
                        <Input />
                    </div>
                </Tippy>
            </div>
            <div>
                <Tippy placement="bottom" visible interactive render={() => <div> word </div>}>
                    <div>
                        <Input />
                    </div>
                </Tippy>
            </div>
            <Button search>Tìm kiếm</Button>
        </div>
    );
}

export default Search;
