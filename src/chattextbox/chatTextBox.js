import React, { Component } from 'react'
import styles from './styles'
import { withStyles, TextField } from '@material-ui/core'
import Send from '@material-ui/icons/Send'


class ChatTextBoxComponent extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            chatText: '',
            
        }
    }

    render() {

        const { classes } = this.props

        return (
            <div className={classes.chatTextBoxContainer}>
                <TextField placeholder="Type your message here ..."
                    onKeyUp={(e) => this.userTyping(e)}
                    id="chattextbox"
                    className={classes.chatTextBox}
                    onFocus={this.userClickedInput}>
                </TextField>
                <Send className={classes.sendBtn} onClick={this.submitMessage}></Send>
            </div>
        )
    }
   
    messageValid = (txt) => txt && txt.replace(/\s/g, '').length
    userTyping = (e) => e.keyCode === 13 ? this.submitMessage : this.setState({ chatText: e.target.value })

    userClickedInput = () => {
        console.log("user clickeds")
    }
    submitMessage = () => {
        if(this.messageValid(this.state.chatText)) {
          this.props.submitMessageFn(this.state.chatText);
          document.getElementById('chattextbox').value = '';
        }
      }
}

export default withStyles(styles)(ChatTextBoxComponent)