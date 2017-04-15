import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCHeader from './components/pc_header';
import MobileHeader from './components/mobile_header';
import PCFooter from './components/pc_footer';
import MobileFooter from './components/mobile_footer';
export default class Root extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCHeader/>
                    <PCFooter/>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileHeader/>
                    <MobileFooter/>
                </MediaQuery>
            </div>
        );
    };
}
ReactDOM.render(<Root/>,document.getElementById("main_container"));