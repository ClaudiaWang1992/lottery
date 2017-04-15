import React from 'react';
import {Row,Col} from 'antd';
import {Menu,Icon,Tabs,message,Form,Input,Button,Modal} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class MobileHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            current:'top',
            modalVisible:false,
            hasLogined:false,
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
            this.setState({current:e.key});
        }
    };
    handleSubmit(e){
        e.preventDefault();
        var myFetchOption={
            method:'GET'
        };
        var formData=this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_comfirmPassword="+formData.r_confirmPassword,myFetchOption).then(response=>response.json()).then(json=>{
            this.setState({userNickName:json.NickUserName,userid:json.UserId});
        });
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    login(){
        this.setModalVisible(true);
    };
    render(){
        let{getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="inbox"/>
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
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入您的账号" {...getFieldDecorator('r_userName')}></Input>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input placeholder="请输入您的密码" {...getFieldDecorator('r_password')}></Input>
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input placeholder="请再次输入您的密码" {...getFieldDecorator('r_comfirmPassword')}></Input>
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