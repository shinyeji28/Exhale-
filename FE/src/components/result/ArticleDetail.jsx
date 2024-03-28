import { useState } from 'react';
import { format } from 'date-fns';
import AfterScrap from '../../assets/scrap/afterScrap.png';
import BeforeScrap from '../../assets/scrap/beforeScap.png';
import ImageComponent from '../commons/ImageComponent.jsx';

// 상세 기사 컴포넌트
const ArticleDetail = ({ article }) => {
  const [isScraped, setIsScraped] = useState(false);

  const formattedDate = format(new Date(article.wroteAt), 'yyyy/MM/dd HH:mm:ss');

  const handleScrap = (event) => {
    event.stopPropagation(); // 이벤트 버블링을 방지
    setIsScraped((prevState) => !prevState);
  };

  return (
    <div>
      {/* 대분류, 중분류 */}
      <div className="flex">
        <span className="inline-block px-3 py-2 mt-4 mr-2 text-sm font-semibold rounded-lg bg-rose-100 text-rose-600 main-category-tag">
          # {article.mainCategory}
        </span>
        <span className="inline-block px-3 py-2 mt-4 mr-2 text-sm font-semibold rounded-lg bg-rose-100 text-rose-600 sub-category-tag">
          # {article.subCategory}
        </span>
      </div>
      {/* 제목 */}
      <div className="flex flex-row items-start justify-between text-left">
        <div className="flex flex-col items-start">
          <div className="mt-4 text-2xl font-semibold text-gray-900 title">{article.title}</div>
          <div className="mt-4 text-gray-500">
            <span className="mr-2">{article.copyRight || '한겨레'}</span>
            <span className="mr-2">|</span>
            <span className="mr-2">{formattedDate}</span>
          </div>
        </div>
        {/* 스크랩 버튼 */}
        <button
          onClick={(e) => handleScrap(e)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleScrap(e);
            }
          }}
          className="m-4 focus:outline-none"
        >
          <img className="h-8" src={isScraped ? AfterScrap : BeforeScrap} alt="Scrap Button" />
        </button>
      </div>
      {/* 요약 */}
      <div
        className="px-3 py-2 mt-4 font-semibold text-left border-2 rounded-lg text-rose-600 border-rose-600 summary"
        style={{ lineHeight: '1.6' }}
      >
        {article.summary}
      </div>
      {/* 이미지 */}
      <div className="flex justify-center mt-4 max-h-[600px]">
        <ImageComponent src={article.image} alt={article.imageCaption} width={600} />
      </div>
      {/* 컨텐츠 */}
      <div className="px-3 py-2 mt-4 font-light text-left text-gray-600" style={{ lineHeight: '2' }}>
        {article.content}
      </div>
    </div>
  );
};

export default ArticleDetail;