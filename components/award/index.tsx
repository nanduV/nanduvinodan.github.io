import styles from './award.module.scss';
import { AwardInterface } from '../../models/AwardInterface';
import { Heading } from '../heading';
import { SubHeading } from '../sub-heading';

export const Award: React.FunctionComponent<AwardInterface> = (props) => {
    const {
        data
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.prize}>
                {data.prize}
            </div>
            <div className={styles.details}>
                <Heading text={data.event} />
                <SubHeading text={data.college} />
                <h5 className={styles.date}>{data.date}, {data.symposium}</h5>
            </div>
        </div>
    )
};
