
import styles from './about.module.scss';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer } from '../../components';

const Education = () => {
    return (
        <PageTemplate>
            <DetailsContainer title="ABOUT">
                <p className={styles.about}>
                    Software Engineer, experienced in developing high scalable APIs and applications focused on back-end optimizations with a demonstrated history of designing, developing and building large-scale applications. Professional with a great work ethic and strives for best results without compromising on quality with high efficient problem solving. Also, a team player who is always passionate about learning new technologies and solving challenging problems.
                </p>
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Education;