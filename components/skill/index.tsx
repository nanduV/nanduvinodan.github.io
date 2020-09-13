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
            {
                items ? items.map((item, index) => {
                    return <div key={index}>{item}</div>
                }) : null
            }
        </div>
    );
}
