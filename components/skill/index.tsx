import styles from './skill.module.scss';
import React from 'react';
import { SkillInterface } from '../../models/SkillInterface';
import { Heading } from '../heading';

export const Skill: React.FunctionComponent<SkillInterface> = ({
    category, items
}) => {
    return (
        <div>
            <Heading text={category} />
            <div className={styles.skills}>
                {
                    items ? items.map((item, index) => {
                        return <div className={styles.skill} key={index}>
                            <div className={styles.icon}>
                                <img src={item.icon} />
                            </div>
                            <p className={styles.name}>{item.name}</p>
                        </div>
                    }) : null
                }
            </div>
        </div>
    );
}
