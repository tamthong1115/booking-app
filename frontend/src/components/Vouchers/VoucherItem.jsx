import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function VoucherItem() {
    return (
        <div className={cx('item')}>
            <img
                className={cx('img-voucher')}
                src="https://th.bing.com/th/id/R.b390ec67ffec4a056688439ff054f1ab?rik=q%2bn51y72%2bLPh3Q&pid=ImgRaw&r=0"
                alt=""
            />
            <div className={cx('info')}>
                <h3 className={cx('heading')}>Năm mới, hành trình mới</h3>
                <p className={cx('title')}>Tiết kiệm từ 15% khi đặt và lưu trú trước 1/4/2024</p>
                <Button className={cx('btn')} primary>
                    Tìm Ưu Đãi Đầu Năm 2024
                </Button>
            </div>
        </div>
    );
}

export default VoucherItem;
