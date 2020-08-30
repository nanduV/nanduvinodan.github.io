
import styles from './awards.module.scss';
import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer, AwardList } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Awards = () => {
    const { data, error } = useSWR(ApiConstants.AWARDS, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="AWARDS">
                {
                    data && <AwardList data={data.college} />
                }
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Awards;