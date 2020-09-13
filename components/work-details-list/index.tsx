import styles from './work-detail.module.scss';
import { WorkDetail } from '../';

interface WorkDetailsListInterface {
    data: any
}

/**
 * Details Container
 * @param props 
 */
export const WorkDetailsList: React.FunctionComponent<WorkDetailsListInterface> = (props) => {
    const {
        data
    } = props;
    return (
        data ? data.map(d => {
            return <WorkDetail key={d.designation} {...d} />
        }) : null
    )
};
