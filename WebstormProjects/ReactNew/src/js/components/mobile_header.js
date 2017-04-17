import React from 'react';
import {Menu,Icon,Tabs,message,Form,Input,Button,Modal} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current:'top',
            modalVisible:false,
            hasLogined:false,
            action:'login',
            userNickName:'',
            userid:0
        };
    };
    setModalVisible(value){
        this.setState({modalVisible:value});
    };
    handleClick(e){
        if(e.key=='register'){
            this.setState({current:'register'});
            this.setModalVisible(true);
        }else{
            {
                this.setState({current:e.key});
            }
        }
    };
    handleSubmit(e){
        e.preventDefault();
        var myFetchOption={
            method:'GET'
        };
        var formData=this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action
            + "&username="+formData.userName+"&password="+formData.password
            +"&r_userName="+formData.r_userName+"&r_password="
            +formData.r_password+"&r_comfirmPassword="
            +formData.r_confirmPassword,myFetchOption)
            .then(response=>response.json())
            .then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.UserId});
                localStorage.setItem('userNickName',this.state.userNickName);
                localStorage.setItem('userid',this.state.userid);
            console.log(json);
        });
        if(this.state.action=="login"){
            this.setState({hasLogined:true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    login(){
        this.setModalVisible(true);
    };
    callback(activityKey){
        if(activityKey==1){
            this.setState({action:'login'});
        }else if(activityKey == 2){
            this.setState({action:'register'});
        }
    };
    logout(){
        localStorage.setItem('userNickName','');
        localStorage.setItem('userid','');
        this.setState({hasLogined:false});
    };
    componentWillMount(){
        if(localStorage.getItem('userNickName')||localStorage.getItem('userid')){
            this.setState({userNickName:localStorage.getItem('userNickName'),userid:localStorage.getItem('userid'),hasLogined:true});
        };
    };
    render(){
        let{getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="inbox" onClick={this.logout.bind(this)}/>
            </Link>
            :
            <Icon type="setting" onClick={this.login.bind(this)}/>
        return(
            <div id="mobile_header">
                <header>
                    <img src="./src/images/logo.png " alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldProps('userName')}></Input>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input placeholder="请输入您的密码" {...getFieldProps('password')}></Input>
                                </FormItem>
                                <Button TYPE="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}></Input>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input placeholder="请输入您的密码" {...getFieldProps('r_password')}></Input>
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input placeholder="请再次输入您的密码" {...getFieldProps('r_comfirmPassword')}></Input>
                                </FormItem>
                                <Button TYPE="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    };
}
export default MobileHeader=Form.create({})(MobileHeader);