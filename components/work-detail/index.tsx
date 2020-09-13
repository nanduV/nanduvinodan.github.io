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
            <div className={styles.timePeriod}>{timePeriod}</div>
            <Heading text={designation} bold={true} />
            {
                organization && <h4 className={styles.organization}>
                    <a href={organization.website} target="_blank">{organization.name}</a>, {organization.location}
                </h4>
            }

            <div className={styles.project}>
                {
                    projects && projects.map(project => <ProjectDetail key={project.name} data={project} />)
                }
            </div>
        </div>
    )
};
