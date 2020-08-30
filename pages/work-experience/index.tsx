import styles from './work-experience.module.scss';
import useSWR from 'swr';

import { DetailsContainer, WorkDetailsList } from '../../components';
import ApiConstants from '../../constants/ApiConstants';
import PageTemplate from '../../containers/page-template/page-template';

const fetcher = (url) => fetch(url).then((res) => res.json());

const WorkExperience = () => {

    const { data, error } = useSWR(ApiConstants.EXPERIENCES, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="WORK EXPERIENCE">
                <WorkDetailsList data={data} />
            </DetailsContainer>
        </PageTemplate>
    )
};

export default WorkExperience;