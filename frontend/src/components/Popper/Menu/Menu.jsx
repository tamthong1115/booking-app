import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
//
import Wrapper from '../Wrapper';
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles);

function Menu({ children }) {
    const renderItems = () => {
        return <MenuItems />;
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('menu-popper')}>
                <div className={cx('menu-body')}> {renderItems()}</div>
            </Wrapper>
        </div>
    );

    return (
        <div>
            <Tippy delay={[0, 300]} visible interactive offset={[-2, 6]} placement="bottom" render={renderResult}>
                <div>{children}</div>
            </Tippy>
        </div>
    );
}

export default Menu;
