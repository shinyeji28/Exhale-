import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ArticleDetail from '../../result/ArticleDetail.jsx';

const CardDetail = ({ article }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !contentRef.current) return;

    // 내용 요소에 대한 애니메이션 설정
    gsap.from(contentRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-75">
      {/* 내용 요소 */}
      <div ref={contentRef} className="flex items-center justify-center w-full h-full rounded-lg">
        <div
          ref={cardRef}
          className="flex p-8 mx-auto bg-white rounded-lg shadow-lg w-[80vw] max-h-[90vh] overflow-y-auto"
        >
          <div className="">
            <ArticleDetail article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
