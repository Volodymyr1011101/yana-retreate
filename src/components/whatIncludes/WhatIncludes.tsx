import HeaderBackground from '../headerBackground/HeaderBackground';
import IncludeExcludeList from '../includeExclude/IncludeExcludeList';
import { exclusions, includes } from './mock_data';
import styles from './styles.module.scss';
const WhatIncludes = () => {
    return (
        <div className={`${styles.wrapper} includes-wrapper`}>
            <HeaderBackground title={'What Includes'} trigger={'includes-wrapper'} componentId={7} />
            <div className={styles.listsWrapper}>
                <IncludeExcludeList title={'Includes'} type={'include'} list={includes} />
                <IncludeExcludeList title={'Excludes'} type={'exclude'} list={exclusions} />
            </div>
        </div>
    );
};

export default WhatIncludes;
