import React, {useEffect,useState} from 'react'
import {Container, Row, Col, Button} from "reactstrap";
import "./styles.css"
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ContentCard from "../Card";
import axios from "axios";

const List = () =>{
    const [activeTab, setActiveTab] = useState('1');
    const [data, setData] = useState([])
    const [pages, setpages] = useState(2)
    var data2 = []

    
    useEffect(()=>{
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res)=>{
            res.data.map((item,index)=>{
                console.log("item", item)
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                    .then((res)=>{
                        setData(prevState => [...prevState, res.data] );
                    })
            })
        })
    },[])

    const addPage = ()=>{
        setpages(pages+3)
    }

    // console.log("datafsdfdsfdsdfsdf",data)
    return (
        <>
            <Row>
                <div className={"logo"}>
                    <img src="/images/hackernewsLogo.png"/>
                </div>
            </Row>
            <div style={{padding:"30px"}}>
                <Row>
                    <div>
                        <Nav className={"navGroup"}>
                            <NavItem>
                                <NavLink className={activeTab == '1' ? 'active' && 'activeClass' : 'inactiveClass'}  onClick={() => setActiveTab('1')}>
                                    New
                                </NavLink>
                            </NavItem>
                            <NavItem style={{paddingLeft:"10px"}}>
                                <NavLink className={activeTab == '2' ? 'active' && 'activeClass' : 'inactiveClass'} onClick={() => setActiveTab('2')}>
                                    Past
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                {
                                    data?.map((item,index) =>{
                                        console.log("item", item)
                                        if(index <= pages) {
                                            return (
                                                <Row key= {index}>
                                                    {/* <ContentCard title={item.title} text={item.text} key={index}/> */}
                                                    <ContentCard title={item.title} text={item.text} />


                                                </Row>
                                            )
                                        }
                                    })
                                }
                            </TabPane>
                            <TabPane tabId="2">
                                {
                                    data.map((item,index) =>{
                                        if(index <= pages){
                                            return(
                                                <Row key= {index}>
                                                    <ContentCard title={item.title} description={item.text} />
                                                </Row>
                                            )
                                        }
                                    })
                                }
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
                <Row>
                    <div style={{textAlign:"center", width:"100%", paddingTop:"10px"}}>
                        <button className={"loadMore"} onClick={()=> addPage()}>Load more</button>
                    </div>
                </Row>
            </div>
            <footer className="footer">
                <img style={{paddingTop:"40px"}} src="/images/hackernews2.png" alt="logo"/>
            </footer>
            </>
    )
}

export default List
