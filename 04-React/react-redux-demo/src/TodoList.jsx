import React from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputAction, addItemAction, delItemAction } from './store/actionCreators'
import axios from 'axios'
export default class TodoList extends React.Component {
    // constructor (props) {
    //     super(props)
    //     console.log(store.getState())
    // }
    state = store.getState()
    inputChangeHandle = (e) => {
        console.log(e.target.value)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
        
    }
    btnAdd = () => {
        const action = addItemAction()
        store.dispatch(action)
    }
    delItem = (id) => {
        const action = delItemAction(id)
        store.dispatch(action)
    }
    componentDidMount () {
        store.subscribe(() => {
            this.setState(store.getState())
        })
        axios.get('/api/list').then((res) => {
            console.log(res.data)
        })

    }
    render () {
        return (
            <>
                <div style={{ padding: '30px 20px'}}>
                    <Input 
                        placeholder="Basic usage" 
                        style={{ width: '200px', marginRight: '10px'}}
                        onChange={this.inputChangeHandle}
                        
                    />
                    {this.state.inputVal}
                    <Button 
                        type="primary"
                        onClick={ ()=>this.btnAdd() }
                    >增加</Button>
                </div>
                <div>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.state.listData}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={ ()=> this.delItem(index)}
                            >{item}</List.Item>
                        )}
                    />
                </div>
            </>
        )
    }
}