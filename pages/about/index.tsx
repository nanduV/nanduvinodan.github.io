
import styles from './about.module.scss';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer } from '../../components';

const Education = () => {
    return (
        <PageTemplate>
            <DetailsContainer title="ABOUT">
                <p className={styles.hello}>Hello World.</p>
                <p className={styles.about}>
                    I'm a Software Engineer, experienced in developing high scalable APIs and applications focused on back-end optimizations with a demonstrated history of designing, developing and building large-scale applications. Professional with a great work ethic and strives for best results without compromising on quality with high efficient problem solving. Also, a team player who is always passionate about learning new technologies and solving challenging problems.
                </p>
                <p className={styles.about}>
                    I am highly proficient in C++, Java, multi-threaded programming and microservices architectures. I love participating in competitive programming challenges and have an <span className={styles.highlight}>“Expert”</span> rating in <a href="http://codeforces.com/profile/nandu_V" target="_blank">Codeforces</a> and <span className={styles.highlight}>“4-Stars”</span> rating in <a href="https://www.codechef.com/users/code_craze" target="_blank">Codechef</a>. Of late, I am exploring designing and implementing scalable and highly available distributed systems.
                </p>
                <p className={styles.about}>
                    I have experience in various software life-cycle phases including but not limited to  requirements phase, designing solutions, setting-up build environment and deployment infrastructure, planning release milestones, developing software and building dashboards for monitoring.
                </p>
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Education;