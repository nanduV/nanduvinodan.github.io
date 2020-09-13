import styles from './work-detail.module.scss';
import { ProjectDetail } from '../project-detail';
import { Heading } from '../heading';
import { WorkDetailInterface } from '../../models/WorkDetailInterface';


/**
 * WorkDetail
 * @param props 
 */
export const WorkDetail: React.FunctionComponent<WorkDetailInterface> = (props) => {
    const {
        timePeriod,
        designation,
        organization,
        projects
    } = props;
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.logo}>
                    <img src={organization.logo} />
                </div>
                <div className={styles.details}>
                    <div className={styles.timePeriod}>{timePeriod}</div>
                    <Heading text={designation} bold={true} />
                    <h4 className={styles.organization}>
                        <a href={organization.website} target="_blank">{organization.name}</a>, {organization.location}
                    </h4>
                </div>
            </header>

            <div className={styles.project}>
                {
                    projects && projects.map(project => <ProjectDetail key={project.name} data={project} />)
                }
            </div>
        </div>
    )
};
