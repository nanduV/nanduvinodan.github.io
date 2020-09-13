import styles from './work-detail.module.scss';
import { ProjectDetail } from '../project-detail';
import { Heading } from '../heading';

interface WorkDetailInterface {
    data: {
        designation?: string,
        organization?: {
            name: string,
            website?: string,
            location?: string
        },
        projects?: Array<{
            name?: string,
            responsibilities?: Array<string>,
            technologies?: Array<string>,
            link?: string
        }>
    }

}

/**
 * Details Container
 * @param props 
 */
export const WorkDetail: React.FunctionComponent<WorkDetailInterface> = (props) => {
    const {
        data
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.timePeriod}>{data.timePeriod}</div>
            <Heading text={data.designation} bold={true} />
            <h4 className={styles.organization}>
                <a href={data.organization.website} target="_blank">{data.organization.name}</a>, {data.organization.location}
            </h4>
            <div className={styles.project}>
                {
                    data.projects && data.projects.map(project => <ProjectDetail key={project.name} data={project} />)
                }
            </div>
        </div>
    )
};
