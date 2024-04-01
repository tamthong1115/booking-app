import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';
import VoucherItem from './VoucherItem';

const cx = classNames.bind(styles);

function Voucher() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <h2 className={cx('heading')}>Ưu đãi</h2>
                <p className={cx('title')}>Khuyến mãi, giảm giá và ưu đãi đặc biệt dành cho bạn</p>
                <div className={cx('list')}>
                    <VoucherItem />
                    <VoucherItem />
                </div>
            </div>
        </div>
    );
}

export default Voucher;
