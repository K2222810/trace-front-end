// src/components/Loading/Loading.jsx

import styles from './Loading.module.css'
import LoadingIcon from '../../assets/images/loading.svg';

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt='Loading...' />
    </main>
  )
}

export default Loading
