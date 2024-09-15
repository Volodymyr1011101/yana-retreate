import HeaderBackground from '../headerBackground/HeaderBackground';
import IncludeExcludeList from '../includeExclude/IncludeExcludeList';
import { exclusions, includes } from './mock_data';
import styles from './styles.module.scss';
const WhatIncludes = () => {
    return (
        <div className={`${styles.wrapper} includes-wrapper`}>
            <HeaderBackground title={"What's Includes"} trigger={'includes-wrapper'} componentId={7} />
            <div className={styles.listsWrapper}>
                <IncludeExcludeList title={'What’s included'} type={'include'} list={includes} />
                <IncludeExcludeList title={'What’s excluded'} type={'include'} list={exclusions} />
            </div>
        </div>
    );
};

export default WhatIncludes;
