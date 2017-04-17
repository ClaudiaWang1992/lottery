import React from 'react';
import {Tabs,Carousel} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component{
    constructor(){
        super();
        this.state={

        };
    };
    callback(key){
        console.log(key);
    };
    render(){
        const settings={
            dots:true,
            speed:500,
            infinite:true,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <MobileHeader/>
                <Tabs size="small" onChange={this.callback.bind(this)}>
                    <TabPane tab='头条' key="1">
                        <Carousel {...settings}>
                            <div><img src="./src/images/carousel_1.jpg"/></div>
                            <div><img src="./src/images/carousel_2.jpg"/></div>
                            <div><img src="./src/images/carousel_3.jpg"/></div>
                            <div><img src="./src/images/carousel_4.jpg"/></div>
                        </Carousel>
                        <MobileList type="top" count={20}></MobileList>
                    </TabPane>
                    <TabPane tab='社会' key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab='国内' key="3">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab='国际' key="4">
                        <MobileList type="guoji" count={20}/>
                    </TabPane>
                    <TabPane tab='娱乐' key="5">
                        <MobileList type="yule" count={20}/>
                    </TabPane>
                    <TabPane tab='体育' key="6">
                        <MobileList type="tiyu" count={20}/>
                    </TabPane>
                    <TabPane tab='科技' key="7">
                        <MobileList type="keji" count={20}/>
                    </TabPane>
                    <TabPane tab='时尚' key="8">
                        <MobileList type="fashion" count={20}/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>
        );
    };
}
