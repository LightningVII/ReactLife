import React from 'react'
import { Tabs, Carousel } from 'antd'
import MobileHeader from '../../components/MobileHeader'
import PCFooter from '../../components/PcFooter'
import MobileList from '../../components/MobileList'
import carousel_1 from '../../assets/images/carousel_1.jpg'
import carousel_2 from '../../assets/images/carousel_2.jpg'
import carousel_3 from '../../assets/images/carousel_3.jpg'
import carousel_4 from '../../assets/images/carousel_4.jpg'
const TabPane = Tabs.TabPane
export default class News extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return (
      <div>
        <MobileHeader />
        <Tabs>
          <TabPane tab='头条' key='1'>
            <div className='carousel'>
              <Carousel {...settings}>
                <div><img src={carousel_1} alt='carousel_1' /></div>
                <div><img src={carousel_2} alt='carousel_2' /></div>
                <div><img src={carousel_3} alt='carousel_3' /></div>
                <div><img src={carousel_4} alt='carousel_4' /></div>
              </Carousel>
            </div>
            <MobileList count={20} type='top' />
          </TabPane>
          <TabPane tab='社会' key='2'>
            <MobileList count={20} type='shehui' />
          </TabPane>
          <TabPane tab='国内' key='3'>
            <MobileList count={20} type='guonei' />
          </TabPane>
          <TabPane tab='国际' key='4'>
            <MobileList count={20} type='guoji' />
          </TabPane>
          <TabPane tab='娱乐' key='5'>
            <MobileList count={20} type='yule' />
          </TabPane>
        </Tabs>
        <PCFooter />
      </div>
    )
  }
}
