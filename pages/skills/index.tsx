import styles from './work-experience.module.scss';
import useSWR from 'swr';

import { DetailsContainer, SkillsList } from '../../components';
import ApiConstants from '../../constants/ApiConstants';
import PageTemplate from '../../containers/page-template/page-template';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Skills = () => {

    const { data, error } = useSWR(ApiConstants.SKILLS, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="SKILLS">
                <SkillsList skills={data} />
            </DetailsContainer>
        </PageTemplate>
    )
};

export default Skills;