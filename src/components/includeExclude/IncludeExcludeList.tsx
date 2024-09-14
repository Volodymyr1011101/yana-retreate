import styles from './styles.module.scss';
interface Props {
    title: string;
    type: 'include' | 'exclude';
    list: string[];
}
const IncludeExcludeList = ({ title, type, list }: Props) => {
    return (
        <div className={styles.wrapper}>
            <h4>{title}</h4>
            <ul className={styles.listItems}>
                {list.map(item => (
                    <li className={styles.listItem}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default IncludeExcludeList;
