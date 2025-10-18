import styles from './about.module.scss';
import useSWR from 'swr';
import PageTemplate from '../../containers/page-template/page-template';
import { Badge, DetailsContainer, Heading } from '../../components';
import ApiConstants from '../../constants/ApiConstants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const About = () => {
    const { data, error } = useSWR(ApiConstants.CODING_PROFILE, fetcher);

    return (
        <PageTemplate>
            <DetailsContainer title="ABOUT">
                <p className={styles.hello}>Hello World.</p>
                <p className={styles.info}>
                    I am a Senior Software Engineer and Technical Leader with 9+ years of experience specializing in building and scaling mission-critical, high-availability platforms across Google, Amazon, and Freshworks.

My current focus is on MLOps within Google Photos, where I contribute to streamlining the entire model flow—from initial development to stable, production-scale deployment. This work is grounded in my deep expertise in Distributed Systems, large-scale APIs, and Backend Optimization.
                </p>
                <p className={styles.info}>
                
Previously, as part of the GCP Cloud Security and Compliance team, I engineered complex systems responsible for enabling global compliance and security for all Google Cloud customers and partners. I excel at solving challenging scalability problems and leading technical initiatives from architectural design through execution. I possess a great work ethic, consistently strive for the best results without compromising quality, and am highly efficient in problem solving.

My expertise spans the entire software lifecycle, including requirements definition, solution design, setting up build environments, planning release milestones, and building robust monitoring infrastructure.

    
                </p>

                <p className={styles.info}>
Core Technical Expertise: MLOps, System Reliability, Scalability, Cloud Security, GCP, Kubernetes, Distributed Systems, Large-Scale APIs, Java, C++, Go, and Multi-threaded Programming.
                </p>
                <div className={styles.info}>
                    <Heading text="Contact Me" />
                    <a href="mailTo:nanduvinodan2@gmail.com">nanduvinodan2@gmail.com</a>
                </div>
            </DetailsContainer>
        </PageTemplate>
    )
};

export default About;