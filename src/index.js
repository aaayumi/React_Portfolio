import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import injectTapEventPlugin from 'react-tap-event-plugin';

class Header extends React.Component {
    render(){
        return(
        <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem
      primaryText="Copy & Paste"
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem primaryText="Cut" />,
        <MenuItem primaryText="Copy" />,
        <Divider />,
        <MenuItem primaryText="Paste" />,
      ]}
    />

    <MenuItem
      primaryText="Case Tools"
      rightIcon={<ArrowDropRight />}
      menuItems={[
        <MenuItem primaryText="UPPERCASE" />,
        <MenuItem primaryText="lowercase" />,
        <MenuItem primaryText="CamelCase" />,
        <MenuItem primaryText="Propercase" />,
      ]}
    />
    <Divider />
    <MenuItem primaryText="Download" leftIcon={<Download />} />
    <Divider />
    <MenuItem value="Del" primaryText="Delete" />

  </IconMenu>
);

    }
}

class About extends React.Component {
    render(){
        return(
        <div className="about">
        <h1> Ayumi Saito </h1>
        <img src="http://www.tabinotebook.com/wp-content/uploads/2017/01/PC237200-3-2.jpg" />
        <h2> A Creator / Developer / Dreamer </h2>
        </div>
        )
    }
}
        
class Work extends React.Component {
    render(){
        return(
        <div className="work">
        <h2> My Work </h2>
        <div class="col-sm-6">    
        <img src="http://www.tabinotebook.com/wp-content/uploads/2017/07/P7161102-1.jpg" />
        </div>
        <div class="col-sm-6">
        <img src="http://www.tabinotebook.com/wp-content/uploads/2017/07/P7161102-1.jpg" />
        </div>
      </div>
        )
    }
}

class Contact extends React.Component {
    constructor(){
        super();
        this.state ={
            text: "",
        }
    }
    
    handleChange = (event) => {
        this.setState({ text: event.traget.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var comment = this.state.comment.trim();
        if(!comment || !name || !email) {
            return;
        }
        this.setState({ name: '', email : '', comment:''});
    }
    
    handleClear = (event) => {
        this.setState({ name: '', email : '', comment:''});
    }
    
    render(){
        return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <TextField floatingLabelText="Name" value={this.state.name} onChange={this.change} />
          <TextField floatingLabelText="Email" value={this.state.email} onChange={this.change} />
          <TextField floatingLabelText="Comment" value={this.state.comment} onChange={this.change} />
            
          <RaisedButton label="Submit" type="submit" />
          <RaisedButton label="Clear" onClick={this.handleClear} />
        </form>
        </div>
        )
    }
}

class Footer extends React.Component {
    render(){
        return(
        <div>
        <p>Coded by Ayumi Saito for freeCodeCamp </p>
        </div>
        )
    }
}

class Portfolio extends React.Component {
    render(){
        return (
        <div>
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer/>
        </div>
        )
    }
}

class App extends React.Component {
    render(){
        return (
        <MuiThemeProvider>
        <Portfolio />
        </MuiThemeProvider>
        )
    }
}
            
ReactDOM.render(
  <App />,
  document.getElementById('root')
);