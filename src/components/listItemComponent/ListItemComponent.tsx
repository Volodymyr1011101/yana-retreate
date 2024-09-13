import styles from './styles.module.scss';
interface IProps {
    strong: string;
    text: string;
    componentId: number;
    className: string;
}
const ListItemComponent = ({ strong, text, componentId, className }: IProps) => {
    return (
        <li className={`list-item${componentId} ${styles.listItem} ${className}`}>
            <p>
                <strong>{strong}</strong> {text}
            </p>
        </li>
    );
};

export default ListItemComponent;
