import React from "react"
import styles from "./App.css"

class Logo extends React.Component{
    render(){
        return(
            <div>
                <h1 className={styles.text} id={styles.logo}>facebook</h1>
                <br/><br/>
            </div>
        )
    }
}

class Image extends React.Component{
    constructor(props){
        super(props)
        this.state={
            size : this.props.size, 
            url : this.props.url
        }
    }
    render(){
        if(this.state.size == "small"){
            return(
                <div>
                    <img className={styles.smallimg} src={this.state.url}/>
                </div>
            );
        }
        else if(this.state.size == "big"){
            return(
                <div>
                    <img className={styles.bigimg} src={this.state.url}/>
                </div>
            );
        }
    }
}


class Content extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name : this.props.name, 
            text : this.props.text, 
            clickable : this.props.clickable, 
            timestamp : ""
        }
        if(this.props.minutes < 2){
            this.state.timestamp = "Just now"
        }
        else{
            this.state.timestamp = String(this.props.minutes).concat(" minutes ago")
        }
    }

    render(){
        return(
            <div className={styles.status}>
                <h5 className={styles.text} id={styles.name}>{this.state.name}</h5>
                <p className={styles.text}>{this.state.text}</p>
                <p className={styles.text} id={styles.timestamp}>{this.state.timestamp}<span className={styles.clickable}>{this.state.clickable}</span></p>
            </div>
        );
    }
}

class Post extends React.Component{
    render(){
        return(
            <div className={styles.post}>
                <Image size="big" url={this.props.propicUrl}/>
                <Content name={this.props.name} text={this.props.status} minutes={this.props.minutes} clickable="• Like • Comment"/>
            </div>
        );
    }

}

class Comment extends React.Component{
    render(){
        return(
            <div className={styles.post} id={styles.comment}>
                <Image size="small" url={this.props.propicUrl}/>
                <Content name={this.props.name} text={this.props.status} minutes={this.props.minutes} clickable="• Flag"/>
            </div>
        );
    }
}

export {
    Logo, 
    Post, 
    Comment
}