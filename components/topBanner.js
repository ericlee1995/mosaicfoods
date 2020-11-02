import styles from './topBanner.module.css';

export default function TopBanner() {
	return (
		<div className={styles['top-banner']}>
			<i className="fas fa-check-circle"></i>{' '}
			<strong>$15 off first box</strong>: Code FIRSTBOX automatically
			applied
		</div>
	);
}
