import URL_INFO from '../../utils/constants/Url';
import styles from './Header.module.scss';

export default function Header() {
	return (
		<div className={styles.container}>
			<span className={styles.header}>{URL_INFO.ORGANIZATION_NAME}</span>
			<span className={styles.header}>{URL_INFO.REPOSITORY_NAME}</span>
		</div>
	);
}
