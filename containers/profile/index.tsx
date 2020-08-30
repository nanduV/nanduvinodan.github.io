import styles from './profile.module.scss';

import { Navigation, SocialIcons } from '../../components';

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation />

            <div className={styles.profile}>
                <div className={styles.name}>Nandu Vinodan</div>
            </div>

            <SocialIcons />
        </div>
    )
};

export default Profile;