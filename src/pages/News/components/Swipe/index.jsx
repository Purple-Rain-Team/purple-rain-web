import React, { useRef } from 'react';
import ReactSwipe from 'react-swipe';
import styles from './style.less';

/**
 * @author 🌈 Jay Chan
 * @description 轮播图
 */
const Swipe = () => {

  const reactSwipeEl = useRef({})

  return (
    <div>
      <ReactSwipe
        className={styles.swipeStyle}
        swipeOptions={{ 
          continuous: false,
        }}
        ref={el => (reactSwipeEl.current = el)}
      >
        <img 
          src={'https://www.blog.locusc.cn/content/images/size/w2000/2020/07/QQ--20200714200502-2.png'}
        />
        <img 
          src={'https://www.blog.locusc.cn/content/images/size/w2000/2020/07/QQ--20200714200502-2.png'}
        />
        <img 
          src={'https://www.blog.locusc.cn/content/images/size/w2000/2020/07/QQ--20200714200502-2.png'}
        />
      </ReactSwipe>
      {/* <button onClick={() => reactSwipeEl.current.next()}>Next</button>
      <button onClick={() => reactSwipeEl.current.prev()}>Previous</button> */}
    </div>
  )
}

export default Swipe