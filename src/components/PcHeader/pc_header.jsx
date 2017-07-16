import React from 'react';
import {Row, Col} from 'antd';
import logo from '../../assets/images/logo.png';
import './style.css';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Link} from 'react-router-dom'
class PCHeader extends React.Component {
    constructor() {
        super();
        // 深入理解
        this.logout = this
            .logout
            .bind(this);
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '阿策',
            userid: 0
        };
    };
    componentWillMount() {
        if (localStorage.userid !== '') {
            this.setState({hasLogined: true});
            this.setState({userNickName: localStorage.userNickName, userid: localStorage.userid});
        }
    };
    setModalVisible(value) {
        this.setState({modalVisible: value});
    };
    handleClick(e) {
        if (e.key === "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    };
    handleSubmit(e) {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this
            .props
            .form
            .getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
            });
        if (this.state.action === "login") {
            this.setState({hasLogined: true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    };
    callback(key) {
        key = parseInt(key, 0)
        if (key === 1) {
            this.setState({action: 'login'});
        } else if (key === 2) {
            this.setState({action: 'register'});
        }
    };
    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        console.log(this)
        console.log(this.self)
        this.setState({hasLogined: false});
    };
    render() {
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    {/*<Link to={`/usercenter`}></Link>*/}
                        <Button type="dashed" htmlType="button">个人中心</Button>
                    
                    &nbsp;&nbsp;
                    <Button type="ghost" htmlType="button" onClick={this.logout}>退出</Button>
                </Menu.Item>
            : <Menu.Item key="register" className="register">
                <Icon type="appstore"/>注册/登录
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <Link to={`/`} className="logo">
                            <img src={logo} alt="logo"/>
                            <span>ReactLife</span>
                        </Link>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this
                            .handleClick
                            .bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            <Menu.Item key="top">
                                <Link to={`/`}>
                                    <Icon type="appstore"/>头条
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Link to={`/lists/sport`}>
                                    <Icon type="appstore"/>NBA
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="1ht">
                                <Link to={`/lists/tech`}>
                                    <Icon type="appstore"/>一海通
                                </Link>
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal
                            title="用户中心"
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            okText="关闭">
                            <Tabs
                                type="card"
                                onChange={this
                                .callback
                                .bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <Form
                                        layout="horizontal"
                                        onSubmit={this
                                        .handleSubmit
                                        .bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('userName')(<Input placeholder="请输入您的账号"/>)}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('password')(<Input type="password" placeholder="请输入您的密码"/>)}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">登录</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form
                                        layout="horizontal"
                                        onSubmit={this
                                        .handleSubmit
                                        .bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号"/>)}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('r_password')(<Input type="password" placeholder="请再次输入您的密码"/>)}
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入您的密码"/>)}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}
export default PCHeader = Form.create()(PCHeader);
