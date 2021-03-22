import React from "react"
import {Row,Col} from "reactstrap";
import "./styles.css"

const ContentCard = (props)=>{
    return(
        <>
            <div className="cardContent">
                <div className={"title"}>{props.title}</div>
                <div className={"text"}>{props.text}</div>
                {/* <div className={"detail"}>
                    <span><img src="/images/clock.png"/></span>
                    <span style={{paddingLeft:"5px", paddingRight:"5px"}}>1 min ago</span>
                    <span className={"vl"}></span>
                    <span>50 comments</span>
                </div> */}
            </div>
        </>
    )
}

export default ContentCard
