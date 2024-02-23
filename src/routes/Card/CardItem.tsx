import React, { ReactNode } from "react"
type CardProps={
    photo:string,
    productTitle:string,
    productDesc:string,
    productPrice:string,
}
class CardItem extends React.Component<CardProps>{
    render(): React.ReactNode {
        constructor(props){
            super(props)
        } 
        return(
            <div>
                <picture>
                    <img src={this.props.photo} alt="" />
                </picture>
                <div>
                    <h1>{this.props.productTitle}</h1>
                    <p>{this.props.productDesc}</p>
                </div>
                <div>
                    <span>{this.props.productPrice}</span>
                </div>
            </div>
        )
    }
}
export default CardItem