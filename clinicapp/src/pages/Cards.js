import React from 'react';
import '../css/cards.css';
import '../css/home.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 class="heading"> <span>Đội ngũ bác sĩ của</span> chúng tôi </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
              src='/images/Doctor1.jpg'
              position='Chức vụ: Trưởng khoa ngoại'
              text='Bác sĩ Micile là một bác sĩ tài năng và dày dặn kinh nghiệm, từng nhận rất nhiều giải thưởng cả trong nước và quốc tế.'
              label='Bác sĩ: Micile'
            />
            <CardItem
              src='/images/Doctor7.jpg'
              position='Chức vụ: Phó khoa'
              text='Bác sĩ Diamond từng học và được cấp bằng bởi Đại học Cornell University, Mỹ - đại học danh tiếng và quy mô bậc nhất nước Mỹ.'
              label='Bác sĩ: Diamond'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/Doctor3.jpg'
              position='Chức vụ: Y tá trưởng'
              text='Y tá trưởng Ladonna, với hơn 5 năm kinh nghiệm làm việc học hỏi.'
              label='Y tá: Ladonna'
            />
            <CardItem
              src='/images/Doctor4.jpg'
              position='Chức vụ: Tiến sĩ'
              text='Tiến sĩ y khoa Alexandra, có rất nhiều thanh tựu trong nghề.'
              label='Tiến sĩ: Alexandra'
            />
            <CardItem
              src='/images/Doctor5.jpg'
              position='Chức vụ: Cử nhân'
              text='Cử nhân Keylin, là một cử nhân triển vọng và đầy tiềm năng.'
              label='Cử nhân: Keylin'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
