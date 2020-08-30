import styles from './education-detail.module.scss';
import { Heading } from '../heading';
import { SubHeading } from '../sub-heading';

interface EducationDetailInterface {
    data: {
        graduation: string,
        specialization: string,
        year: string,
        school?: {
            name?: string,
            board?: string,
            location?: string
        },
        percentage: {
            score: number,
            units?: string
        },
    }

}

/**
 * Details Container
 * @param props 
 */
export const EducationDetail: React.FunctionComponent<EducationDetailInterface> = (props) => {
    const {
        data
    } = props;
    return (
        <div className={styles.container}>
            <h1 className={styles.score}>{data.percentage.score}<span>{data.percentage.units}</span></h1>
            <Heading text={`${data.graduation}, ${data.specialization}`} />
            {data.school && <SubHeading text={`${data.school.name}, ${data.school.location}`} />}
            <div className={styles.image}>

            </div>
        </div>
    )
};
