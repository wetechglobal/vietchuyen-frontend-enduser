/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import dataHighlight from '../data/dataHighlight'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LatestNews from '../../home/components/latestNew/index'
import './style.scss'

const Details = () => {
  let { newsId } = useParams()
  const [newsData, setNewsData] = useState([])
  const { t } = useTranslation()

  useEffect(() => {
    setNewsData(dataHighlight.filter((x) => x.id == newsId))
  }, [])

  return (
    <>
      <Row className="details">
        {/* <ListNews data={newsData} /> */}
        {newsData.map((item, index) => {
          let lineTextColor = item.typeId === 1 ? 'red' : 'blue'
          return (
            <>
              <Image src={item.link} className="details__images" />
              {item.date}{' '}
              <div style={{ color: lineTextColor }}>
                {t(`${item.typeName}`)}
              </div>
              {t(`${item.title}`)}
              {t(`${item.description}`)}
              <blockquote>
                Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người
                ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh
                cổ điển xuất hiện từ năm 45 trước Công Nguyên.
              </blockquote>
              <div class="title-news-details">
                Trái với quan điểm chung của số đông
              </div>
              <div class="title-news-details-about">
                Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người
                ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh
                cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có
                khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney
                College (bang Virginia - Mỹ) quan tâm tới một trong những từ
                la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn của
                Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này
                trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối
                cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn
                1.10.32 và 1.10.33 của "De Finibus Bonorum et Malorum" (Đỉnh tối
                thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước
                Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ
                biến trong thời kì Phục Hưng. Dòng đầu tiên của Lorem Ipsum,
                "Lorem ipsum dolor sit amet..." được trích từ một câu trong đoạn
                thứ 1.10.32.
              </div>
              <div className="flexcontainer">
                <Image src={item.link} className="details__images__about" />
                <Image src={item.link} className="details__images__about" />
              </div>
              <div class="title-news-details">
                Nghĩa là nó đã có khoảng hơn 2000 tuổi
              </div>
              <div class="title-news-details-about">
                Một giáo sư của trường Hampden-Sydney College (bang Virginia -
                Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất,
                "consectetur", trích từ một đoạn của Lorem Ipsum, và đã nghiên
                cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ
                đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra,
                nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của "De
                Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái
                Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này
                là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng.
                Dòng đầu tiên của Lorem Ipsum, "Lorem ipsum dolor sit amet..."
                được trích từ một câu trong đoạn thứ 1.10.32.
              </div>
              <div className="flexcontainer-end">
                <div class="title-news-details-end">Công nghệ</div>
                <div class="title-news-details-end">Công ty</div>
              </div>
              <p class="icon-details">Gợi ý bài viết</p>
              <LatestNews />
            </>
          )
        })}
      </Row>
    </>
  )
}
export default Details
