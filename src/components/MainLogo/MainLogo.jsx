import logoImage from '../../images/DYCgroupLogo.svg';
import styles from './MainLogo.module.css';

export const MainLogo = () => {
	return <div className={styles.logoContainer}>
		<img src={logoImage} alt="DYC Group" />
	</div>
}