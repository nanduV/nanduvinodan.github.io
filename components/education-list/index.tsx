import { EducationDetail } from '../education-detail';

interface EducationListInterface {
    data: any
}

/**
 * Details Container
 * @param props 
 */
export const EducationList: React.FunctionComponent<EducationListInterface> = (props) => {
    const {
        data
    } = props;
    return (
        data ? data.map(d => {
            return <EducationDetail key={d.designation} data={d} />
        }) : null
    )
};
