import styles from './work-detail.module.scss';
import { Award } from '..';
import { AwardInterface } from '../../models/AwardInterface';

interface AwardListInterface {
    data: Array<AwardInterface>
}

export const AwardList: React.FunctionComponent<AwardListInterface> = (props) => {
    const {
        data
    } = props;
    return (
        data ? data.map((d, index) => {
            return <Award data={d} />
        }) : null
    )
};
