
import styles from './awards.module.scss';
import React, { useState } from 'react';
import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { DetailsContainer, AwardList } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Awards = () => {

    const [loader, setLoader] = useState(false);

    const { data, error } = useSWR(ApiConstants.AWARDS, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="AWARDS">
                {
                    data ? <AwardList awards={data.college} /> : <div>Loading</div>
                }
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Awards;