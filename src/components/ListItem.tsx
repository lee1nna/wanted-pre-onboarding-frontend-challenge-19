import { List } from '../model/List';
import { useAppDispatch, useAppSelector } from '../store';
import { deleteList } from '../store/ListSlice';
import styles from './ListItem.module.css';

function ListItem() {
  const { lists } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  return (
    <div className={styles['item-wrapper']}>
      {lists.map((list: List, idx) => (
        <div key={`list-${list.id}`} className={styles.item}>
          <div>{list.title}</div>
          <button
            onClick={() => {
              dispatch(deleteList(idx));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListItem;
