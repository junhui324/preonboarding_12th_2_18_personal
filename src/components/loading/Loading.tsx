import styles from './Loading.module.scss';

export default function LoadingSpinner() {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.loading}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
