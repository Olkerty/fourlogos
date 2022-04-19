import styles from './LogoBrick.module.css';

export const LogoBrick = ({ backgroundImage, logoImage, alt, path }) => {
	return <a href={path}>
	  <div 
	    className={styles.logoContainer}
	  >	
	    <img src={backgroundImage} alt={alt} className={styles.logoBack}/>
		  <img src={logoImage} alt={alt} className={styles.logoImage}/>
	  </div>
	</a>
}
		